import React, { useState, useEffect } from 'react'

import { Icon } from 'components'

import style from './index.module.scss'

export default function ToTop() {
  const [isTop, setIsTop] = useState(true)

  const scrollTop = (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const checkTop = () => {
      const windowScroll = window.scrollY
      if (isTop && windowScroll > 80) {
        setIsTop(false)
      } else if (!isTop && windowScroll <= 80) {
        setIsTop(true)
      }
    }

    checkTop()

    window.addEventListener('scroll', checkTop)

    return () => {
      window.removeEventListener('scroll', checkTop)
    }
  }, [isTop])

  return (
    <a className={`${style.wrapper} ${isTop ? style.hidden : ''}`} onClick={scrollTop}>
      <Icon className={style.icon} icon="arrow-circle-up"></Icon>
    </a>
  )
}
