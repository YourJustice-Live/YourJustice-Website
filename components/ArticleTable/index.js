import React from 'react'

import style from './index.module.scss'

export default function ArticleTable({children}) {
  return (
    <div className={style.wrapper}>{children}</div>
  )
}
