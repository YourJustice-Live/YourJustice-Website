import React, {useState, useEffect, useRef} from 'react'

import style from './index.module.scss'

const MAX_WIDTH = 192

export default function Code({disclosed = false, children}) {
  const [expanded, setExpanded] = useState(false)
  const [wrapperHeight, setWrapperHeight] = useState(0)
  const wrapper = useRef(null)
  const code = useRef(null)
  const clipboard = useRef(null)

  const handleExpand = e => {
    e.preventDefault()
    setExpanded(!expanded)
  }

  const handleCopy = e => {
    e.preventDefault()
    const textToCopy = code.current.firstChild;
    const replacedText = textToCopy.innerHTML.replace(/&nbsp;/g, ' ');
    clipboard.current.setAttribute('value', replacedText);

    clipboard.current.select();
    document.execCommand('copy');
  }

  useEffect(() => {
    setWrapperHeight(wrapper.current.clientHeight)
  }, [])

  return (
    <div ref={wrapper} className={style.wrapper}>
      {wrapperHeight >= MAX_WIDTH && <ul className={style.buttons}>
        {!disclosed && <li>
          <button onClick={handleExpand}>{expanded ? 'Hide' : 'Show all'}</button>
        </li>}
        <li>
          <button onClick={handleCopy}>Copy</button>
        </li>
      </ul>}
      <div ref={code} className={`${style.code} ${expanded ? style.expanded : ''} ${disclosed ? style.disclosed : ''}`}>
        {children}
      </div>
      <input ref={clipboard} type="text"/>
    </div>
  )
}
