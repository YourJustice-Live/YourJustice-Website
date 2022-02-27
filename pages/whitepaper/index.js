import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { WhitepaperChapter } from 'components'

import { getData, getLastUpdateDate } from 'utils'

import { translations, disclaimer, links, inProgress } from 'translations/whitepaper'

import style from './index.module.scss'

export async function getStaticProps(context) {
  const { locale } = context
  const token = process.env.GITHUB_ACCESS_TOKEN
  const result = await getData('', 'whitepaper', locale)
  const lastUpdateDate = await getLastUpdateDate(
    token,
    `data/whitepaper/${locale}.md`,
    locale
  )

  return {
    props: { result, lastUpdateDate },
  }
}

export default function WhitePaper({ lastUpdateDate }) {
  const { locale } = useRouter()

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.header}>
            <div className={style.breadcrumbs}>
              <Link href="/">Home</Link> /{' '}
              <Link href="/whitepaper">
                <span>Whitepaper</span>
              </Link>
            </div>
            {lastUpdateDate && (
              <div className={style.date}>
                {translations.lastUpdate[locale]}: {lastUpdateDate}
              </div>
            )}
            <h1>YourJustice WhitePaper</h1>
            <details>
              <summary>{translations.disclaimer[locale]}</summary>
              {disclaimer[locale].map((paragraph, index) => (
                <p key={`sikdjufn;wion` + index}>{paragraph}</p>
              ))}
            </details>
          </div>
          <div className={style.index}>
            <p>{translations.tableOfContents[locale]}</p>
            <ul className={style.links}>
              {links.map(elem => (
                <li key={elem.link}>
                  {elem.inners ? (
                    <WhitepaperChapter elem={elem} />
                  ) : (
                    <Link href={'/whitepaper/' + elem.link}>
                      <a className={style.link}>{elem.text[locale]}</a>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <p>In progress:</p>
            <ul className={style.progress}>
              {inProgress.map((elem, index) => (
                <li key={`fc023d1cc2c1` + index}>{elem[locale]}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
