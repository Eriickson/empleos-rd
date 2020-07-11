import React from 'react'
import * as Feather from 'react-feather'
import { css } from '@emotion/core'
import { ActionsFormBottom } from '../../../elements'

const styleText = css`
  font-size: 0.8rem;
  color: gray;
`

const DatosLaborales = () => {
  return (
    <div className="container p-0 p-md-2">
      <div className="row">
        <div className="col-md-8">
          <div>
            <div className="mb-3 d-flex justify-content-between">
              <div>
                <p className="mb-0 h6 lead">Desarrollador Web</p>
                <span css={styleText}>Dominicana Tours</span>
              </div>
              <div>
                <div className="d-flex align-items-center" css={styleText}>
                  <Feather.Clock />
                  <span className="ml-1">08/2019 - 03/2020</span>
                </div>
              </div>
            </div>
            <div className="mb-3 d-flex justify-content-between">
              <div>
                <p className="mb-0 h6 lead">Desarrollador Web</p>
                <span css={styleText}>Dominicana Tours</span>
              </div>
              <div>
                <div className="d-flex align-items-center" css={styleText}>
                  <Feather.Clock />
                  <span className="ml-1">08/2019 - 03/2020</span>
                </div>
              </div>
            </div>
            <div className="mb-3 d-flex justify-content-between">
              <div>
                <p className="mb-0 h6 lead">Desarrollador Web</p>
                <span css={styleText}>Dominicana Tours</span>
              </div>
              <div>
                <div className="d-flex align-items-center" css={styleText}>
                  <Feather.Clock />
                  <span className="ml-1">08/2019 - 03/2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ActionsFormBottom />
      </div>
    </div>
  )
}

export default DatosLaborales
