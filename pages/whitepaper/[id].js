import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { ArticleContent, PageNavigation, Button, Icon } from 'components'

import { getData, getAllFiles, getLastUpdateDate } from 'utils'

import { translations } from 'translations/whitepaper'
import { months } from 'translations/months'

import style from './index.module.scss'

export async function getStaticProps(context) {
  const { locale, params } = context
  const token = process.env.GITHUB_ACCESS_TOKEN
  const page = params.id
  const result = await getData('whitepaper', page, locale)
  const res = await getLastUpdateDate(token, `README.md`)

  return {
    props: {
      ...result,
      page,
      res
    },
  }
}

export async function getStaticPaths({ locales }) {
  const pages = getAllFiles('whitepaper')

  const paths = locales.reduce(
    (acc, locale) => [
      ...acc,
      ...pages.map(id => ({
        params: {
          id,
        },
        locale,
      })),
    ],
    []
  )

  return {
    paths,
    fallback: false,
  }
}

export default function Article({ data, page, res }) {
  const [nav, setNav] = useState([])
  const {locale} = useRouter()
  const date = new Date(res.ref.target.history.edges[0].node.committedDate)
  const year = date.getFullYear()
  const month = months[date.getMonth()][locale]
  const day = date.getDate()
  const convertedDate = `${month} ${day}, ${year}`

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.header}>
            <div className={style.breadcrumbs}>
              <Link href="/">Home</Link> / <Link href="/whitepaper"><a><span>Whitepaper</span></a></Link>
            </div>
            <div className={style.date}>
              {translations.lastUpdate[locale]}: {convertedDate}
            </div>
            <h1>YourJustice WhitePaper</h1>
          </div>
          <div className={style.navigation}>
            <PageNavigation nav={nav} />
          </div>
          <ArticleContent content={data} setNav={setNav} />
        </div>
        <div className={style.sidebar}>
          <div className={style.sticky}>
            <Link href="/whitepaper">
              <a className={style.tableOfContents}>
                <Icon className={style.icon} icon="chevron-right"></Icon>
                <span>{translations.tableOfContents[locale]}</span>
              </a>
            </Link>
            <a
              href="https://github.com/YourJustice-Live/yourjustice-live-website"
              target="_blank"
              rel="nofollow noreferrer"
              className={style.github}
            >
              <Icon className={style.githubIcon} icon="github"></Icon>
              <span>{translations.github[locale]}</span>
            </a>
            <PageNavigation nav={nav} sidebar={true} search={true} />
          </div>
        </div>
      </div>
    </div>
  )
}
