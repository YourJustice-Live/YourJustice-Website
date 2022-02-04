import React from 'react'
import Link from 'next/link'

import style from './index.module.scss'

export default function CustomLink({type = 'external', href, className = 'link', children}) {
  return type === 'inner'
    ? <Link href={href}>
      <a className={style[className]}>{children}</a>
    </Link>
    : <a href={href} className={style[className]} target="_blank" rel="nofollow noreferrer">{children}</a>
}
