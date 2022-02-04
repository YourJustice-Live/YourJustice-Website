import { useState } from 'react'
import {
  HomeBanner, Welcome, Cards, Blockquote,
  Inners, Equilibrium, Roadmap, Team, Forms
} from 'components'

function Home() {

  return <div className="main">
    <HomeBanner />
    <Welcome />
    <Cards />
    <Blockquote />
    <Inners />
    <Equilibrium />
    <Roadmap />
    <Team />
    <Forms />
  </div>
}

export default Home
