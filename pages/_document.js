import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="preload"
          href="/assets/fonts/Aeroport Mono/Aeroport Mono.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/assets/fonts/Kalam-Regular/Kalam-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/assets/fonts/RedHatDisplay-Italic/RedHatDisplay-Italic.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/assets/fonts/yourjustice/yourjustice.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
          as="font"
          crossOrigin=""
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
