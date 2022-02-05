import React, {useEffect, useRef} from 'react'

import List from './List'

import style from './List.module.scss'

export default function RoadmapList({data, isOpen}) {
  const lastElem = useRef('')

  const resizeBranch = () => {
    const lastOffset = lastElem.current.offsetTop
    const branch = lastElem.current.querySelector(`.${style.branch}`)
    branch.style.height = `${lastOffset + 20}px`
  }

  useEffect(() => {
    window.addEventListener('load', resizeBranch)
    window.addEventListener('resize', resizeBranch)

    return () => {
      window.removeEventListener('load', resizeBranch)
      window.removeEventListener('resize', resizeBranch)
    }
  }, [resizeBranch])

  useEffect(() => {
    resizeBranch()
  }, [resizeBranch, isOpen])

  return (
    <ul className={`${style.wrapper} ${isOpen ? style.opened : ''}`}>
      {data.map((item, index) => index === data.length - 1
        ? <li ref={lastElem} className={style.listItem} key={`82d09gf3dx1` + index}>
          <div className={style.branch}></div>
          <p className={style.listText}>{item.text}</p>
          {item.list && <List data={item.list} isOpen={isOpen} />}
        </li>
        : <li className={style.listItem} key={`82d09gf3dx1` + index}>
          <p className={style.listText}>{item.text}</p>
          {item.list && <List data={item.list} isOpen={isOpen} />}
      </li>)}
    </ul>
  )
}
