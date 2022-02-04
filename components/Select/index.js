import React, {useState, useEffect, useRef} from 'react'

import style from './index.module.scss'

export default function Select({defaultValue = '', name, value = '', children, onChange, error, errorText}) {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef()

  useEffect((e) => {
    const checkIfOutside = e => {
      if (isOpen && selectRef.current && !selectRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', checkIfOutside)

    return () => {
      document.removeEventListener('mousedown', checkIfOutside)
    }
  }, [isOpen])

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleChange = e => {
    const value = e.target.getAttribute('value')
    onChange({target: {value, name}})
    setIsOpen(false)
  }

  return (
    <div ref={selectRef} className={`${style.wrapper} ${error ? style.error : ''} ${isOpen ? style.open : ''}`}>
      <p className={style.current} onClick={handleOpen}>{value ? value : <span>{defaultValue}</span>}</p>
      <div>
        <span value="1" onClick={handleChange}>1</span>
        <span value="2" onClick={handleChange}>2</span>
        <span value="3" onClick={handleChange}>3</span>
        <span value="4" onClick={handleChange}>4</span>
        <span value="5" onClick={handleChange}>5</span>
      </div>
      <span className={style.errorText}>{errorText}</span>
    </div>
  )
}
