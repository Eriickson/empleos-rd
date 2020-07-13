import React from 'react'
import { css } from '@emotion/core'
import TabPillEditarEmpresa from './TabPillEditarEmpresa'
import Link from 'next/link'

const Avatar = css`
  width: 50%;
  border-radius: 50%;
  /* border: 2px solid gray; */
`

export const EditarEmpresaTemplate = () => {
  return (
    <div className="row">
      <div className="col-md-3 mb-3">
        <ul className="list-group">
          <li className="list-group-item py-3">
            <div className="d-flex flex-column align-items-center">
              <div className="img" css={Avatar}>
                <img
                  css={css`
                    border-radius: 50%;
                  `}
                  className="img-fluid"
                  src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Microsoft_Groove_logo.png"
                  alt=""
                />
              </div>
              <p className="h5 mb-0 mt-2">Uno Call Center</p>
              <p>Empresa de Call Center</p>
            </div>
          </li>
          <li className="list-group-item px-4 py-3 d-flex justify-content-between align-items-center">
            <p className="mb-0">Vacantes Publicadas</p>
            <b className="text-success">30</b>
          </li>
          <li className="list-group-item px-4 py-3 d-flex justify-content-between align-items-center">
            <p className="mb-0">Personas reclutadas</p>
            <b className="text-primary">3</b>
          </li>
          <li className="list-group-item px-4 py-3 d-flex justify-content-between align-items-center">
            <p className="mb-0">Solicitantes</p>
            <b className="text-danger">8</b>
          </li>
        </ul>
      </div>
      <div className="col-md-9">
        <TabPillEditarEmpresa />
      </div>
    </div>
  )
}
