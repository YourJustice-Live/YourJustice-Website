import React, {useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

import style from './index.module.scss'

export default function WhitepaperChapter({elem}) {
  const [isOpen, setIsOpen] = useState(false)
  const {locale} = useRouter()
  const {text, link, inners} = elem

  const onToggle = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <div className={style.wrapper}>
      <a className={`${style.toggle} ${isOpen ? style.opened : ''}`} onClick={onToggle}></a>
      <Link href={'/whitepaper/' + link}>
        <a className={style.link}>{text[locale]}</a>
      </Link>
      <ul className={`${style.links} ${isOpen ? style.opened : ''}`}>
        {inners.map(elem => <li key={elem.link}>
          <Link href={'/whitepaper/' + elem.link}>{elem.text[locale]}</Link>
        </li>)}
      </ul>
    </div>
  )
}
