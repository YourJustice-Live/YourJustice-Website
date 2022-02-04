import React from 'react'
import {useRouter} from 'next/router'
import { Parallax, Background } from "react-parallax";

import {Button} from 'components'

import style from './index.module.scss'

import {data} from './data'

export default function HomeBanner({language}) {
  const {locale} = useRouter()

  return <div className={style.banner}>
    <Parallax bgImage={'/assets/images/ocean.png'} strength={-50}>
      <Parallax bgImage={'/assets/images/statue.png'} bgImageStyle={{top: '-30px'}} strength={-100}>
        <Parallax bgImage={'/assets/images/drone.png'} bgImageStyle={{top: '40px'}} strength={-140}>
          <Parallax bgImage={'/assets/images/peoples.png'} strength={-180}>
            <Parallax bgImage={'/assets/images/tree.png'} bgImageStyle={{left: '60%'}} strength={-220}>
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
            </Parallax>
          </Parallax>
        </Parallax>
      </Parallax>
    </Parallax>
  </div>
}
