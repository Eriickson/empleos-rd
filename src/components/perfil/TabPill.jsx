import React from 'react'
import EducacionFormal from './datos/educacion/EducacionFormal'
import EducacionNoFormal from './datos/educacion/EducacionNoFormal'
import * as Feather from 'react-feather'
import { css } from '@emotion/core'

const TabPill = () => {
  return (
    <>
      <nav className="mt-5">
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <a
            className="nav-link active"
            id="nav-experiencia-tab"
            data-toggle="tab"
            href="#nav-experiencia"
            role="tab"
            aria-controls="nav-experiencia"
            aria-selected="true"
          >
            Experiencia
          </a>
          <a
            className="nav-link"
            id="nav-educacion-tab"
            data-toggle="tab"
            href="#nav-educacion"
            role="tab"
            aria-controls="nav-educacion"
            aria-selected="false"
          >
            Educación
          </a>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active pt-3"
          id="nav-experiencia"
          role="tabpanel"
          aria-labelledby="nav-experiencia-tab"
        >
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h5 className="mb-1">Desarrollador Web</h5>
              <span>Dominicana Tours.</span>
            </div>
            <div>
              <p
                css={css`
                  font-size: 14px;
                  color: gray;
                `}
              >
                <Feather.Clock
                  css={css`
                    width: 1.2rem;
                    height: 1.2rem;
                  `}
                  className="mr-1"
                />
                Sep, 2019 - Sep, 2020 <br />
                <span className="ml-4">(+9 meses)</span>
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h5 className="mb-1">Programador Web</h5>
              <span>Dominicana Tours.</span>
            </div>
            <div>
              <p
                css={css`
                  font-size: 14px;
                  color: gray;
                `}
              >
                <Feather.Clock
                  css={css`
                    width: 1.2rem;
                    height: 1.2rem;
                  `}
                  className="mr-1"
                />
                Sep, 2019 - Sep, 2020 <br />
                <span className="ml-4">(+9 meses)</span>
              </p>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade pt-3"
          id="nav-educacion"
          role="tabpanel"
          aria-labelledby="nav-educacion-tab"
        >
          <EducacionFormal />
          <EducacionNoFormal />
        </div>
      </div>
    </>
  )
}

export default TabPill
