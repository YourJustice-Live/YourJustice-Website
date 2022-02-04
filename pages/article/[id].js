import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { ArticleContent, PageNavigation, Button } from 'components'

import { getData, getAllFiles } from 'utils'

import { translations } from '../../translations/article'

import style from './index.module.scss'

export async function getStaticProps(context) {
  const { locale, params } = context
  const page = params.id
  const result = await getData('article', page, locale)

  return {
    props: {
      ...result,
      page,
    },
  }
}

export async function getStaticPaths({ locales }) {
  const pages = getAllFiles('article')

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

export default function Article({ data, page }) {
  const [nav, setNav] = useState([])
  const router = useRouter()
  const {locale} = router

  const handleBack = () => {
    router.back()
  }

  return (
    <div className={style.wrapper}>
      <div className={style.flex}>
        <div className={style.sidebar}>
          <div className={style.sticky}>
            <Button
              className={style.button}
              reverse={true}
              onClick={handleBack}
            >
              {translations.back[locale]}
            </Button>
            <PageNavigation
              rootPath={`/article/${page}`}
              nav={nav}
              side="left"
            />
          </div>
        </div>
        <div className={style.content}>
          <ArticleContent content={data} setNav={setNav} />
          <div className={style.postscriptum}>
            <img
              src="/assets/images/article-postscriptum.png"
              alt="postscriptum"
            />
            <p>
              If you think these stats are incorrect or can be made more
              accurate, please raise an issue or PR.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
