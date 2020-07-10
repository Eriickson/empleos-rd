import React from 'react'
import { css } from '@emotion/core'
import Link from 'next/link'

const Custom404 = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      css={css`
        width: 100vw;
        height: 100vh;
      `}
    >
      <div className="text-center">
        <h1>Pagina no encontrada</h1>
        <Link href="/app">
          <a className="lead"> Ir al Home</a>
        </Link>
      </div>
    </div>
  )
}

export default Custom404
