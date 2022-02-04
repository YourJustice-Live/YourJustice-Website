import React, {useState, useEffect, useRef} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

import {Search} from 'components'

import {translations} from './data'

import style from './index.module.scss'

const OFFSET = -70

export default function PageNavigation({sidebar, search = false, side = 'right', nav, rootPath}) {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('')
  const navRef = useRef()
  const router = useRouter()
  const {locale} = router

  const handleToggle = e => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  const handleScroll = e => {
    e.preventDefault()
    const hash = e.target.getAttribute('data-id')
    const elem = document.getElementById(hash)
    const coord = elem.getBoundingClientRect().top + window.pageYOffset
    history.replaceState(null, null, `#${hash}`)
    window.scrollTo({
      top: coord,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const ids = nav.map(anchor => anchor.id)
    const scrollPos = window.scrollY
    let set = ''
    ids.forEach((id, index) => {
      const elem = document.getElementById(id)
      const elemPos = elem ? elem.getBoundingClientRect().top + scrollPos : 0
      if (elemPos - (scrollPos - OFFSET) <= 10) {
        set = id
      }
    })
    setActive(set || nav[0]?.id)
  }, [nav])

  useEffect(() => {
    const ids = nav.map(anchor => anchor.id)
    const navHeight = navRef.current.clientHeight

    const onScroll = e => {
      const scrollPos = window.scrollY
      let set = ''
      ids.forEach((id, index) => {
        const elem = document.getElementById(id)
        const elemPos = elem ? elem.getBoundingClientRect().top + scrollPos : 0
        if (elemPos - (scrollPos - OFFSET) <= 10) {
          set = id
        }
      })
      if (set !== active) {
        const navLink = navRef.current?.querySelectorAll(`[data-id="${set}"]`)[0]
        const navLinkOffset = navLink?.parentElement.offsetTop|| 0
        const navRefScroll = navRef.current?.scrollTop || 0
        const scrollNavTo = navHeight + navRefScroll - 180 < navLinkOffset
          ? navLinkOffset - navHeight + 180
          : navRefScroll + 180 > navLinkOffset
            ? navLinkOffset - 180
            : navRefScroll
        navRef.current?.scrollTo({
          top: scrollNavTo,
          behavior: 'smooth'
        })
        setActive(set === '' ? ids[0] : set)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [nav, active])

  return (
    <div className={`${style.wrapper} ${sidebar ? style.sidebar : ''} ${isOpen ? style.opened : ''} ${side === 'left' ? style.left : ''}`}>
      <button className={`${style.button} ${isOpen ? style.opened : ''}`} onClick={handleToggle}>
        <span>{translations.onPage[locale]}</span>
      </button>
      <div className={`${style.dropdown} ${isOpen ? style.opened : ''}`}>
        {/* {search && <Search />} */}
        <p>{translations.onPage[locale]}</p>
        <ul ref={navRef}>
          {nav.map((anchor, i) => <li key={`sdxmc230cc-1c32` + i}>
            <a className={active === anchor.id ? style.active : ''} data-id={anchor.id} onClick={handleScroll}>
              {anchor.text}
            </a>
          </li>)}
        </ul>
      </div>
    </div>
  )
}
