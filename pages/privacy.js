import React, { useState } from 'react'
import { ArticleContent, PageNavigation } from 'components'
import { getData } from 'utils'
import style from 'pages/whitepaper/index.module.scss'

export async function getStaticProps(context) {
  const { locale } = context
  const result = await getData('', 'privacy', locale)

  return {
    props: result,
  }
}

export default function Privacy({ data }) {
  const [nav, setNav] = useState([])

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.content}>
          {/* <div className={style.navigation}>
            <PageNavigation nav={nav} />
          </div> */}
          <ArticleContent content={data} setNav={setNav} />
        </div>
        <div className={style.sidebar}>
          <div className={style.sticky}>
            <PageNavigation nav={nav} sidebar={true} search={true} />
          </div>
        </div>
      </div>
    </div>
  )
}
