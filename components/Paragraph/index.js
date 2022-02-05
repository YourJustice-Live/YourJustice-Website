import React from 'react'

import style from './index.module.scss'

export default function Paragraph({className = '', children}) {
  return (
    <p className={style[className]}>{children}</p>
  )
}
