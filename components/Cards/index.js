import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

import {Button} from 'components'

import style from './index.module.scss'

import {data} from './data'

export default function Cards() {
  const handleScroll = e => {
    e.preventDefault()
    const elem = document.getElementById('join-us')
    const coord = elem.getBoundingClientRect().top + window.pageYOffset
    history.replaceState(null, null, `#join-us`)
    window.scrollTo({
      top: coord,
      behavior: 'smooth'
    })
  }

  const {locale} = useRouter()
  const {cards, tags} = data
  return <div className={style.cards}>
    <a id="ecosystem" className={style.anchor}></a>
    <div className={style.cardsContainer}>
      <div className={style.cardsContent}>
        {cards.map((card, i) => <div key={`sjcowncxm2mc` + i} className={card.double ? style.card2x : style.card}>
          <figure>
            <img src={card.image} alt={card.title[locale]}/>
          </figure>
          <div>
            <h3>{card.title[locale]}</h3>
            <p dangerouslySetInnerHTML={{ __html: card.text[locale]}}></p>
            <a className={style.button} onClick={handleScroll}>
              <span>
                {card.button[locale]}
              </span>
            </a>
          </div>
        </div>)}
      </div>
    </div>
    <div className={style.cardsFooter}>
      <ul>
        {tags.map((tag, i) => <li key={`ivnerybc231fc23c` + i}>
          {tag.icon}
          <span>{tag.text[locale]}</span>
        </li>)}
      </ul>
    </div>
  </div>
}
