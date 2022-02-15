import React, {useState, useEffect, useRef, useContext, useCallback} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

import style from './index.module.scss'

const languages = [
  // {
  //   id: 'ru',
  //   text: 'Русский'
  // },
  {
    id: 'en',
    text: 'English'
  },
  // {
  //   id: 'ko',
  //   text: '한국인'
  // },
  // {
  //   id: 'tr',
  //   text: 'Türk'
  // }
]

export default function Language({setLang, top = false}) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef()
  const router = useRouter()
  const {locale, pathname, asPath} = router

  const handleOpen = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  const handleClick = (e) => {
    e.preventDefault()
    const lang = e.target.getAttribute('lang')
    router.push(pathname, asPath, {locale: lang, scroll: false})
    setIsOpen(false)
  }

  useEffect((e) => {
    const checkIfOutside = e => {
      if (isOpen && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', checkIfOutside)

    return () => {
      document.removeEventListener('mousedown', checkIfOutside)
    }
  }, [isOpen])

  return (
    <div className={style.wrapper} ref={dropdownRef}>
      <button className={style.current} onClick={handleOpen}><img src={`/assets/images/${locale}.png`} alt="Current lang" /></button>
      <ul className={`${style.list} ${isOpen ? style.opened : ''} ${top ? style.top : ''}`}>
        {languages.map(lang => <li key={lang.id}>
          <button onClick={handleClick} lang={lang.id}><img src={`/assets/images/${lang.id}.png`} alt={lang.text} />
            <span>{lang.text}</span>
          </button>
        </li>)}
      </ul>
    </div>
  )
}
