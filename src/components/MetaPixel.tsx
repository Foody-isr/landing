"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

const PIXEL_ID = "1059276727609296";
type PixelWindow = Window & {
  fbq?: (command: "trackSingle", pixelId: string, event: "PageView") => void;
};

/** Track each landing page once, including client-side navigation. */
export default function MetaPixel() {
  const pathname = usePathname();
  const [ready, setReady] = useState(false);
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    const fbq = (window as PixelWindow).fbq;
    if (!ready || !fbq || !pathname || lastTrackedPath.current === pathname) return;
    // Global track deduplicates PageView; trackSingle allows subsequent views for this Pixel.
    fbq("trackSingle", PIXEL_ID, "PageView");
    lastTrackedPath.current = pathname;
  }, [pathname, ready]);

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive" onReady={() => setReady(true)}>
        {`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
          // React handles navigation tracking; disable Meta's history listener to avoid duplicates.
          fbq.disablePushState = true;
          fbq('init', '${PIXEL_ID}');
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element -- Meta requires a direct tracking request. */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
