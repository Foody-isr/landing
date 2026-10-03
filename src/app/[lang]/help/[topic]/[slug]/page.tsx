import { getContentMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import {
  getTopics,
  getArticles,
  getArticle,
  getAllArticlePaths,
} from "@/lib/help/content";
import Breadcrumb from "@/components/help/Breadcrumb";
import ArticleSidebar from "@/components/help/ArticleSidebar";
import type { Lang } from "@/lib/help/types";
import en from "@/lib/i18n/en.json";
import fr from "@/lib/i18n/fr.json";
import he from "@/lib/i18n/he.json";

const SUPPORTED: Lang[] = ["en", "fr", "he"];
const translations = { en, fr, he } as Record<Lang, typeof en>;

/** Index original articles; canonicalize untranslated fallbacks to their English source. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; topic: string; slug: string }>;
}) {
  const { lang: value, topic, slug } = await params;
  const lang = value as Lang;
  let article;
  try {
    article = getArticle(lang, topic, slug);
  } catch {
    notFound();
  }
  const sourceLang = article.usedFallback ? "en" : lang;
  const available = SUPPORTED.filter((l) =>
    getAllArticlePaths(l).some((a) => a.topic === topic && a.slug === slug),
  );
  return getContentMetadata(
    sourceLang,
    `/help/${topic}/${slug}`,
    String(article.frontmatter.title || slug),
    String(article.frontmatter.description || ""),
    available,
  );
}

export function generateStaticParams() {
  const params = [];
  for (const lang of SUPPORTED) {
    for (const { topic, slug } of getAllArticlePaths(lang)) {
      params.push({ lang, topic, slug });
    }
  }
  return params;
}

export default async function HelpArticlePage({
  params,
}: {
  params: Promise<{ lang: string; topic: string; slug: string }>;
}) {
  const { lang: requestedLang, topic, slug } = await params;
  const lang: Lang = SUPPORTED.includes(requestedLang as Lang)
    ? (requestedLang as Lang)
    : "en";
  const t = translations[lang];

  let articleData;
  try {
    articleData = getArticle(lang, topic, slug);
  } catch {
    notFound();
  }

  const { frontmatter, rawContent, usedFallback } = articleData;

  const { content } = await compileMDX({
    source: rawContent,
    options: {
      parseFrontmatter: false,
      mdxOptions: { remarkPlugins: [remarkGfm] },
    },
  });

  const topics = getTopics(lang);
  const topicMeta = topics.find((tp) => tp.slug === topic);
  const articles = getArticles(lang, topic);
  const basePath = `/${lang}/help/${topic}`;

  const title = String(frontmatter.title || slug);
  const apps = frontmatter.apps as string | undefined;
  const updatedDate = frontmatter.updatedAt
    ? new Date(String(frontmatter.updatedAt))
    : null;
  const updatedAt =
    updatedDate && Number.isFinite(updatedDate.getTime())
      ? new Intl.DateTimeFormat(
          lang === "he" ? "he-IL" : lang === "fr" ? "fr-FR" : "en-GB",
          { dateStyle: "medium", timeZone: "UTC" },
        ).format(updatedDate)
      : null;

  return (
    <main id="main-content" className="help-article-page">
      <Breadcrumb
        segments={[
          { label: t.help.breadcrumb_home, href: `/${lang}` },
          { label: t.help.breadcrumb_help, href: `/${lang}/help` },
          { label: topicMeta?.title ?? topic, href: basePath },
          { label: title },
        ]}
      />

      <div className="help-article-layout">
        <article>
          {usedFallback && (
            <div className="help-translation-notice">
              <span aria-hidden="true">ℹ️</span>
              {t.help.translation_notice}
            </div>
          )}

          <div
            className="help-article-body"
            lang={usedFallback ? "en" : lang}
            dir={usedFallback || lang !== "he" ? "ltr" : "rtl"}
          >
            <h1>{title}</h1>

            <div className="help-article-meta">
              {apps === "both" ? (
                <>
                  <span className="help-article-meta-tag">FoodyPOS</span>
                  <span className="help-article-meta-tag">FoodyAdmin</span>
                </>
              ) : apps === "foodypos" ? (
                <span className="help-article-meta-tag">FoodyPOS</span>
              ) : apps === "foodyadmin" ? (
                <span className="help-article-meta-tag">FoodyAdmin</span>
              ) : null}
              {updatedAt && (
                <span>
                  {t.help.updated}: {updatedAt}
                </span>
              )}
            </div>

            {content}
          </div>
        </article>

        <ArticleSidebar
          articles={articles}
          basePath={basePath}
          topicTitle={topicMeta?.title ?? topic}
        />
      </div>
    </main>
  );
}
