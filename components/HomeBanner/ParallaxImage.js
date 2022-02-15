import React, {useState, useEffect} from 'react'
import Image from 'next/image'

import style from './ParallaxImage.module.scss'

export default function ParallaxImage({src, depth, offset}) {
  const [shift, setShift] = useState(offset)
  const [scale, setScale] = useState(1)

  const parallax = () => {
    const scroll = window.scrollY
    if (scroll < 900) {
      const _shift = scroll / (-depth) + offset
      setShift(_shift)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', parallax)

    return () => {
      window.removeEventListener('scroll', parallax)
    }
  }, [shift, parallax])

  useEffect(() => {
    setScale(1 + 0.2 / depth)
  }, [])

  return (
    <div className={style.parallax} style={{transform: `translateY(${shift}px) scale(${scale})`}}>
      <Image
        className={style.image}
        src={src}
        layout="responsive"
        placeholder="blur"
      />
    </div>
  )
}
