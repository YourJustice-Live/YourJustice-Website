import React, {useState} from 'react'

import {Icon} from 'components'

import style from './index.module.scss'

export default function Search() {
  const [input, setInput] = useState('')

  const handleChange = e => {
    const {value} = e.target
    setInput(value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(input)
  }

  return (
    <div className={style.wrapper}>
      <form action="#" onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} placeholder="Search..."/>
        <button><Icon icon="search" className={style.icon} /></button>
      </form>
    </div>
  )
}
