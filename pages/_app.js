import React, {useEffect} from 'react'
import {Layout} from 'components'

import 'styles/index.scss'

import {init} from "@socialgouv/matomo-next";

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    init({ url: 'https://yourjusticelife.matomo.cloud', siteId: '1' });
  })
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp 
