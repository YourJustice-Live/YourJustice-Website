/* eslint-disable @next/next/no-img-element */
import Script from 'next/script'
import React from 'react'

export default function AnalyticsScripts() {
  return (
    <>
      <Script
        id="ga-main"
        src="https://www.googletagmanager.com/gtag/js?id=G-MXCK8LKMCD"
        async
      />
      <Script
        id="ga-config"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-MXCK8LKMCD');         
          `,
        }}
      />
      <Script
        id="ym-counter"
        dangerouslySetInnerHTML={{
          __html: `
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(87020325, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
          });
        `,
        }}
      />
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/87020325"
            style={{ position: 'absolute', left: '-9999px' }}
            alt=""
          />
        </div>
      </noscript>
    </>
  )
}








