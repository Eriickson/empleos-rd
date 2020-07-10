import React from 'react'
import * as Feather from 'react-feather'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Modal } from '../../elements'
import DetallesPublicacion from './DetallesPublicacion'
import Link from 'next/link'

const ButtonOptions = styled.button`
  background-color: #009ddc;
  border: none;
  color: white;
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 5px;
  outline: none;
`
const StylesIcons = css`
  width: 1.2rem;
  height: 1.2rem;
`

const TablaPublicaciones = () => {
  return (
    <div>
      <nav className="d-flex justify-content-between">
        <div>
          <Link href="/publicar/nueva-vacante">
            <a className="btn btn-primary px-3 mr-3">
              <Feather.Plus css={StylesIcons} />
            </a>
          </Link>
          <div className="btn-group">
            <button className="btn btn-primary px-3">
              <Feather.Edit css={StylesIcons} />
            </button>
            <button className="btn btn-primary px-3">
              <Feather.Trash css={StylesIcons} />
            </button>
          </div>
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item btn btn-primary">
              <Feather.ChevronLeft css={StylesIcons} />
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item btn btn-primary">
              <Feather.ChevronRight css={StylesIcons} />
            </li>
          </ul>
        </nav>
      </nav>
      <div
        css={css`
          overflow-x: auto;
          overflow-y: hidden;
        `}
      >
        <table
          className="table"
          css={css`
            /* min-width: max-content; */
            width: 100%;
          `}
        >
          <thead>
            <tr>
              <th scope="col">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="form-check-input"
                />
              </th>
              <th scope="col">
                <p className="m-2">Puesto</p>
              </th>
              <th scope="col">
                <p className="m-2">Salario</p>
              </th>
              <th scope="col">
                <p className="m-2">Postulados</p>
              </th>
              <th scope="col">
                <p className="m-2">Vacantes</p>
              </th>
              <th scope="col">
                <p className="m-2">Postulados</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="form-check-input"
                />
              </th>
              <td>
                <p className="w-max-content m-2">
                  Desarrollador Web y Diseñador web
                </p>
              </td>
              <td>
                <p className="w-max-content m-2">RD$ 25,000</p>
              </td>
              <td>
                <p className="w-max-content m-2">27 Feb. 2020</p>
              </td>
              <td>
                <p className="w-max-content m-2 text-center">8</p>
              </td>
              <td>
                <p className="w-max-content m-2 text-center">
                  <span className="badge bg-danger">+99</span>
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="form-check-input"
                />
              </th>
              <td>
                <p className="w-max-content m-2">
                  Desarrollador Web y Diseñador web
                </p>
              </td>
              <td>
                <p className="w-max-content m-2">RD$ 25,000</p>
              </td>
              <td>
                <p className="w-max-content m-2">27 Feb. 2020</p>
              </td>
              <td>
                <p className="w-max-content m-2 text-center">8</p>
              </td>
              <td>
                <p className="w-max-content m-2 text-center">
                  <span className="badge bg-danger">+99</span>
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="form-check-input"
                />
              </th>
              <td>
                <p className="w-max-content m-2">
                  Desarrollador Web y Diseñador web
                </p>
              </td>
              <td>
                <p className="w-max-content m-2">RD$ 25,000</p>
              </td>
              <td>
                <p className="w-max-content m-2">27 Feb. 2020</p>
              </td>
              <td>
                <p className="w-max-content m-2 text-center">8</p>
              </td>
              <td>
                <p className="w-max-content m-2 text-center">
                  <span className="badge bg-danger">+99</span>
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="form-check-input"
                />
              </th>
              <td>
                <DetallesPublicacion />
              </td>
              <td>
                <p className="w-max-content m-2">RD$ 25,000</p>
              </td>
              <td>
                <p className="w-max-content m-2">27 Feb. 2020</p>
              </td>
              <td>
                <p className="w-max-content m-2 text-center">8</p>
              </td>
              <td>
                <p className="w-max-content m-2 text-center">
                  <span className="badge bg-danger">+99</span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TablaPublicaciones
