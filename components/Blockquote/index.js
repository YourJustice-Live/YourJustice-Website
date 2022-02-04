import React from 'react'
import {useRouter} from 'next/router'

import {Icon} from 'components'

import style from './index.module.scss'

import {data} from './data'

export default function Blockquote() {
  const {locale} = useRouter()
  const {title, author, quote} = data
  return <div className={style.wrapper}>
    <div className={style.blockquote}>
      <h2 className={style.title}>{title[locale]}</h2>
      <div className={style.container}>
        <div className={style.person}>
          <figure>
            <img src="/assets/images/blockquote-ava.png" alt="Balaji Srinivasan"/>
          </figure>
          <p className={style.personName}>{author.name[locale]}</p>
          <p className={style.personPosition} dangerouslySetInnerHTML={{ __html: author.position[locale] }}></p>
        </div>
        <div className={style.quotes}>
          {/*<div className={style.quote}>
            <span className={style.quoteLeft}>
              <Icon icon="quote-left" className={style.quoteIcon} />
            </span>
            <p className={style.text} dangerouslySetInnerHTML={{ __html: quote.text[locale]}}></p>
            <span className={style.quoteRight}>
              <Icon icon="quote-right" className={style.quoteIcon} />
            </span>
          </div>*/}
          <div className={style.quote}>
            <blockquote>
              <span className={style.quoteLeft}>
                <Icon icon="quote-left" className={style.quoteIcon} />
              </span>
              <ul>
                {quote.list[locale].map((li, i) => <li key={`sdf2cd115plamc` + i} dangerouslySetInnerHTML={{ __html: li}}></li>)}
              </ul>
              <span className={style.quoteRight}>
                <Icon icon="quote-right" className={style.quoteIcon} />
              </span>
            </blockquote>
            <p className={style.postscriptum}>{data.quote.postscriptum[locale]}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
}
