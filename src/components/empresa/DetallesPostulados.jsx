import React from 'react'
import { css } from '@emotion/core'
import { Collapse } from '../../elements'
import * as Feather from 'react-feather'
import Link from 'next/link'

const DetallesPostulados = () => {
  return (
    <ul
      className="list-group"
      css={css`
        .btn-collapse {
          background-color: white;
          color: black;
          box-shadow: none;
          font-size: 20px;
          border: none;
        }
      `}
    >
      <li className="list-group-item ">
        <Collapse
          title={
            <div className="d-flex align-items-center">
              <Link href="/perfil/[username]" as="/perfil/erickson01d">
                <a>
                  <img
                    src="https://persona-app-es.herokuapp.com/assets/personas/1-e0e7223aeb2f66a659d032fb393d11d7e62e00706b1bef5f9f1a13eaa93d4b4b.png"
                    alt=""
                    className="rounded"
                    css={css`
                      width: 3rem;
                      height: 3rem;
                    `}
                  />
                </a>
              </Link>
              <p className="mb-0 ml-2">Erickson Manuel Holguín</p>
            </div>
          }
          name="a4"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at
            atque, quae nostrum assumenda harum, expedita praesentium ea maiores
            rerum repudiandae dignissimos veniam velit provident id. Doloremque
            amet itaque maiores.
          </p>
          <div className="d-flex justify-content-end">
            <div className="btn-group btn-group-sm">
              <button className="btn btn-danger">
                <Feather.XSquare />
              </button>
              <button className="btn btn-success">
                <Feather.CheckSquare />
              </button>
            </div>
          </div>
        </Collapse>
      </li>
    </ul>
  )
}

export default DetallesPostulados
