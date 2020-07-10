import React from 'react'
import * as Feather from 'react-feather'
import { css } from '@emotion/core'
import Link from 'next/link'

const EducacionNoFormal = () => {
  return (
    <div className="mb-3">
      <p className="h4">Educación No Formal</p>
      <div className="pl-3">
        <div className="mb-2">
          <p className="lead mb-1">
            <b>React, La Guía Completa: Hooks Context Redux MERN +15 Apps</b>
          </p>
          <div className="d-flex">
            <Link href="/">
              <a className="d-flex align-items-center mr-2">
                <img
                  className="mr-2"
                  css={css`
                    width: 1.8rem;
                  `}
                  src="https://image.flaticon.com/icons/svg/3143/3143460.svg"
                  alt=""
                />
                <span className="h6 mb-0">Certificado</span>
              </a>
            </Link>
            <Link href="/">
              <a className="d-flex align-items-center mr-2">
                <img
                  className="mr-2"
                  css={css`
                    width: 1.8rem;
                  `}
                  src="https://image.flaticon.com/icons/svg/3143/3143340.svg"
                  alt=""
                />
                <span className="h6 mb-0">Certificado</span>
              </a>
            </Link>
          </div>
          <div
            className="d-flex align-items-center mt-2"
            css={css`
              font-size: 0.8rem;
              color: gray;
              svg {
                width: 1rem;
                height: 1rem;
              }
            `}
          >
            <Feather.Clock className="mr-1" />
            <span>11/2019 - 03/2020</span>
          </div>
        </div>
        <div className="mb-2">
          <p className="lead mb-1">
            <b>Angular: De cero a experto (Angular 10+)</b>
          </p>
          <div className="d-flex">
            <Link href="/">
              <a className="d-flex align-items-center mr-2">
                <img
                  className="mr-2"
                  css={css`
                    width: 1.8rem;
                  `}
                  src="https://image.flaticon.com/icons/svg/3143/3143460.svg"
                  alt=""
                />
                <span className="h6 mb-0">Certificado</span>
              </a>
            </Link>
            <Link href="/">
              <a className="d-flex align-items-center mr-2">
                <img
                  className="mr-2"
                  css={css`
                    width: 1.8rem;
                  `}
                  src="https://image.flaticon.com/icons/svg/3143/3143340.svg"
                  alt=""
                />
                <span className="h6 mb-0">Certificado</span>
              </a>
            </Link>
          </div>
          <div
            className="d-flex align-items-center mt-2"
            css={css`
              font-size: 0.8rem;
              color: gray;
              svg {
                width: 1rem;
                height: 1rem;
              }
            `}
          >
            <Feather.Clock className="mr-1" />
            <span>11/2019 - 03/2020</span>
          </div>
        </div>
        <div className="mb-2">
          <p className="lead mb-1">
            <b>Node: De cero a experto</b>
          </p>
          <div className="d-flex">
            <Link href="/">
              <a className="d-flex align-items-center mr-2">
                <img
                  className="mr-2"
                  css={css`
                    width: 1.8rem;
                  `}
                  src="https://image.flaticon.com/icons/svg/3143/3143460.svg"
                  alt=""
                />
                <span className="h6 mb-0">Certificado</span>
              </a>
            </Link>
            <Link href="/">
              <a className="d-flex align-items-center mr-2">
                <img
                  className="mr-2"
                  css={css`
                    width: 1.8rem;
                  `}
                  src="https://image.flaticon.com/icons/svg/3143/3143340.svg"
                  alt=""
                />
                <span className="h6 mb-0">Certificado</span>
              </a>
            </Link>
          </div>
          <div
            className="d-flex align-items-center mt-2"
            css={css`
              font-size: 0.8rem;
              color: gray;
              svg {
                width: 1rem;
                height: 1rem;
              }
            `}
          >
            <Feather.Clock className="mr-1" />
            <span>11/2019 - 03/2020</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducacionNoFormal
