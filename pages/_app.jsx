import React from 'react'
import Router from 'next/router'
import { Global, css } from '@emotion/core'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import '../src/sass/styles.scss'
typeof window !== 'undefined' && import('bootstrap/dist/js/bootstrap.bundle.js')

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          #nprogress .bar {
            background-color: red;
            height: 2px;
          }
        `}
      />
      {/* <ApolloProvider client={client}> */}
      <Component {...pageProps} />
      {/* </ApolloProvider> */}
    </>
  )
}
