import {useState} from 'react'
import {ArticleContent, PageNavigation, AnswersNavigation} from 'components'

import {getData, getAllFiles} from 'utils'

import style from './index.module.scss'

export async function getStaticProps(context) {
  const {locale, params} = context
  const page = params.id
  const result = await getData('answers', page, locale)

  return {
    props: {
      ...result,
      page
    }
  }
}

export async function getStaticPaths({locales}) {
  const pages = getAllFiles('answers')

  const paths = locales.reduce(
    (acc, locale) => [
      ...acc,
      ...pages.map((id) => ({
        params: {
          id,
        },
        locale,
      })),
    ],
    []
  );

  return {
    paths,
    fallback: false
  }
}


export default function Answers({data, page}) {
  const [nav, setNav] = useState([])

  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        <div className={style.sticky}>
          <AnswersNavigation />
        </div>
      </div>
      <div className={style.content}>
        <ArticleContent content={data} setNav={setNav} />
        <div className={style.postscriptum}>
          <img src="/assets/images/article-postscriptum.png" alt="postscriptum"/>
          <p>If you think these stats are incorrect or can be made more accurate, please raise an issue or PR.</p>
        </div>
      </div>
      <div className={style.right}>
        <div className={style.sticky}>
          <PageNavigation rootPath={`/answers/${page}`} nav={nav} sidebar={true} />
        </div>
      </div>
    </div>
  )
}
