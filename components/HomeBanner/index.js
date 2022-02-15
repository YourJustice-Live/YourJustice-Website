import React from 'react'
import {useRouter} from 'next/router'
import ParallaxImage from './ParallaxImage'

import {Button} from 'components'

import style from './index.module.scss'

import {data} from './data'

// parallax images
import oceanPic from '../../public/assets/images/ocean.png'
import dronePic from '../../public/assets/images/drone.png'
import statuePic from '../../public/assets/images/statue.png'
import peoplesPic from '../../public/assets/images/peoples.png'
import treePic from '../../public/assets/images/tree.png'

export default function HomeBanner({language}) {
  const {locale} = useRouter()

  return <div className={style.banner}>
    <div className={style.bannerParallax}>
      <ParallaxImage src={oceanPic} depth={50} offset={18} />
      <ParallaxImage src={dronePic} depth={18} offset={50} />
      <ParallaxImage src={statuePic} depth={14} offset={65} />
      <ParallaxImage src={peoplesPic} depth={11} offset={82} />
      <ParallaxImage src={treePic} depth={7} offset={130} />
    </div>
    <div className={style.bannerContainer}>
      <div className={style.bannerContent}>
        <h2>YourJustice.life</h2>
        <p>{data[locale].text}</p>
        <Button type="link" to="/whitepaper" className={style.button}>WhitePaper</Button>
      </div>
    </div>
    <div className={style.bannerFooter}>
      <ul>
        {data[locale].list.map((li, i) => <li key={`vfdds2` + i}>{li}</li>)}
      </ul>
    </div>
  </div>
}
