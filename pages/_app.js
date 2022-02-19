import '../styles/global.scss';

import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Home-One</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp