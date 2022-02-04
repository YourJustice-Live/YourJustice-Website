import React from 'react'

import Link from 'next/link'

import style from './index.module.scss'

export default function Button({
  className = '', type = 'button', to = '/', children, disabled = false,
  fill = false, second = false, reverse = false, onClick = () => {}
}) {

  const handleClick = e => {
    e.preventDefault()
    onClick()
  }

  return type === 'link'
    ? <Link href={to}>
        <a className={
          `${style.btn} ${disabled ? style.disabled : ''} ${fill ? style.fill : ''} ${second ? style.second : ''} ${className} ${reverse ? style.reverse : ''}`
        }>
          <span>
            {children}
          </span>
        </a>
      </Link>
    : <a className={`${style.btn} ${disabled ? style.disabled : ''} ${fill ? style.fill : ''} ${className} ${reverse ? style.reverse : ''}`} onClick={handleClick}>
        <span>
          {children}
        </span>
      </a>
}
