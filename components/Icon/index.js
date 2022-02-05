import React from 'react'

import style from './index.module.scss'

export default function Icon({icon = '', className = ''}) {
  return (
    <i className={`${style.icon} if-${icon} ${className}`}></i>
  )
}
