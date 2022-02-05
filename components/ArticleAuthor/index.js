import React from 'react'

import style from './index.module.scss'

export default function ArticleAuthor({ava, children}) {
  return (
    <div className={style.wrapper}>
      <img src={ava} alt="Author"/>
      <p>
        {children}
      </p>
    </div>
  )
}
