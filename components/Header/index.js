import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

import {Language} from 'components'

import {data} from './data'

import style from './index.module.scss'

export default function Header({lang, setLang}) {
  const [active, setActive] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const {locale, route} = useRouter()
  const {links} = data

  const handleMenu = e => {
    e.preventDefault()
    setIsMenuOpen(!isMenuOpen)
  }

  const handleScroll = e => {
    e.preventDefault()
    const id = e.target.getAttribute('data-id')
    const elem = document.getElementById(id)
    const coord = elem.getBoundingClientRect().top + window.pageYOffset
    history.replaceState(null, null, `#${id}`)
    window.scrollTo({
      top: coord,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const ids = links.map(link => link.link)
    const scrollPos = window.scrollY
    let set = ''
    ids.forEach((id, index) => {
      const elem = document.getElementById(id)
      const elemPos = elem ? elem.getBoundingClientRect().top + scrollPos : 0
      if (elemPos - (scrollPos) <= 10) {
        set = id
      }
    })
    setActive(set)
  }, [links])

  useEffect(() => {
    const ids = links.map(link => link.link)

    const onScroll = e => {
      const scrollPos = window.scrollY
      let set = ''
      ids.forEach((id, index) => {
        const elem = document.getElementById(id)
        const elemPos = elem ? elem.getBoundingClientRect().top + scrollPos : 0
        if (elemPos - (scrollPos) <= 10) {
          set = id
        }
      })
      if (set !== active) {
        setActive(set)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [links, active])

  return <header className={style.header}>
    <div className={style.headerContainer}>
      <Link href="/">
        <a className={`${style.toHome} ${route === '/' ? style.disabled : ''}`}>
          <img src="/assets/images/logo.svg" alt="YourJustice.life"/>
        </a>
      </Link>
      <ul className={style.links}>
        {links.map((link, i) => <li key={`23c322p11kc1` + i}>
          {
            route !== '/'
              ? <Link href={`/#${link.link}`}>
                <a>{link.text[locale]}</a>
              </Link>
              : <a className={link.link === active ? style.active : ''} data-id={link.link} onClick={handleScroll}>{link.text[locale]}</a>
          }
        </li>)}
      </ul>
      {/* <div className={style.languages}>
        <Language lang={lang} setLang={setLang} />
      </div> */}
      <div className={style.menuWrapper}>
        <button className={`${style.burger} ${isMenuOpen ? style.opened : ''}`} onClick={handleMenu}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`${style.menu} ${isMenuOpen ? style.opened : ''}`}>
          {/* <div className={style.menuLanguage}>
            <Language lang={lang} setLang={setLang} />
          </div> */}
          <ul>
            {links.map((link, i) => <li key={`23c322p11kc1` + i}>
              {
                route !== '/'
                  ? <Link href={`/#${link.link}`}>
                    <a>{link.text[locale]}</a>
                  </Link>
                  : <a data-id={link.link} onClick={handleScroll}>{link.text[locale]}</a>
              }
            </li>)}
          </ul>
        </div>
      </div>
    </div>
  </header>
}
