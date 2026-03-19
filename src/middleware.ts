import { NextRequest, NextResponse } from 'next/server';

const SUPPORTED_LOCALES = ['en', 'fr'];
const DEFAULT_LOCALE = 'en';
const COOKIE_NAME = 'foody-locale';

function getPreferredLocale(request: NextRequest): string {
  // 1. Check cookie (user explicitly picked a language)
  const cookie = request.cookies.get(COOKIE_NAME)?.value;
  if (cookie && SUPPORTED_LOCALES.includes(cookie)) return cookie;

  // 2. Check Accept-Language header (browser default)
  const acceptLang = request.headers.get('accept-language') || '';
  for (const part of acceptLang.split(',')) {
    const lang = part.split(';')[0].trim().toLowerCase();
    for (const supported of SUPPORTED_LOCALES) {
      if (lang === supported || lang.startsWith(`${supported}-`)) return supported;
    }
  }

  return DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files, api routes, Next.js internals, and generated images
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/assets') ||
    pathname.startsWith('/opengraph-image') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Check if pathname already has a locale prefix
  const segments = pathname.split('/');
  const firstSegment = segments[1];

  if (SUPPORTED_LOCALES.includes(firstSegment)) {
    const response = NextResponse.next();
    response.cookies.set(COOKIE_NAME, firstSegment, { path: '/', maxAge: 60 * 60 * 24 * 365 });
    return response;
  }

  // Redirect to the preferred locale (302 to avoid browser caching)
  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url, 302);
}

export const config = {
  matcher: ['/((?!_next|api|assets|.*\\..*).*)'],
};
