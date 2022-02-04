import React, {useState} from 'react'
import Link from 'next/link'
import {Icon} from 'components'

import AnswersToggle from './AnswersToggle'

import style from './index.module.scss'

export default function AnswersNavigation() {
  // const [data, setData] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  // useEffect(() => {
  //   import('../../data/answers/navigation.md')
  //     .then(res => {
  //       fetch(res.default)
  //         .then(res => res.text())
  //         .then(res => setData(res))
  //         .catch(err => console.log(err))
  //     })
  //     .catch(err => console.log(err))
  // }, [])

  const handleOpen = e => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <div className={`${isOpen ? style.opened : ''} ${style.wrapper}`}>
      <button className={`${isOpen ? style.opened : ''} ${style.toggle}`} onClick={handleOpen}>
        <span>Smart contract</span>
        <Icon icon="chevron-bottom" className={style.icon} />
      </button>
      <ul className={`${style.rootList} ${isOpen ? style.opened : ''}`}>
        <li>
          <Link href="/">Overview</Link>
        </li>
        <li>
          <AnswersToggle button="Use cases">
            <li>
              <AnswersToggle button="Standarts">
                <li>
                  <AnswersToggle button="Token standards">
                    <li>
                      <Link href="/">ERC-20: Fungible Tokens</Link>
                    </li>
                  </AnswersToggle>
                </li>
              </AnswersToggle>
            </li>
          </AnswersToggle>
        </li>
        <li>
          <AnswersToggle button="Advanced">
            <li>
              <AnswersToggle button="Standarts">
                <li>
                  <AnswersToggle button="Token standards">
                    <li>
                      <Link href="/">ERC-20: Fungible Tokens</Link>
                    </li>
                  </AnswersToggle>
                </li>
              </AnswersToggle>
            </li>
          </AnswersToggle>
        </li>
        <li>
          <Link href="/">Oracles</Link>
        </li>
        <li>
          <AnswersToggle button="Advanced">
            <li>
              <Link href="/">ERC-20: Fungible Tokens</Link>
            </li>
          </AnswersToggle>
        </li>
      </ul>
    </div>
  )
}
