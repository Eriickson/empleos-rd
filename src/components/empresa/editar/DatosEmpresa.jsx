import React from 'react'
import { ActionsFormBottom, Collapse, Select } from '../../../elements'
import { css } from '@emotion/core'
import { Textarea } from 'react-bootstrap-icons'

const DatosEmpresa = () => {
  return (
    <div className="container p-0 mt-3">
      <Collapse
        title={'Datos de la empresa'}
        name="datos-empresa"
        isVisible={true}
        styles={css`
          margin-bottom: 0.5rem;
        `}
      >
        <div className="row mt-3">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="mb-1" htmlFor="">
                Nombre de la empresa
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="mb-1" htmlFor="">
                Dirección
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="mb-1" htmlFor="">
                Frase
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="mb-1" htmlFor="">
                Cantidad de Empleados
              </label>
              <select className="form-control" name="" id="">
                <option value="">1-4</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="mb-1" htmlFor="">
                Descripción
              </label>
              <textarea
                className="form-control"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
        </div>
      </Collapse>
      <Collapse
        title={'Contactos'}
        name="Contactos"
        styles={css`
          margin-bottom: 0.5rem;
        `}
      >
        <div className="row mt-3">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="mb-1" htmlFor="">
                Teléfono
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="mb-1" htmlFor="">
                Correo Electrónico
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="mb-1" htmlFor="">
                Fax
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
      </Collapse>
      <Collapse
        title={'Redes Sociales'}
        name="redes-sociales"
        styles={css`
          margin-bottom: 0.5rem;
        `}
      >
        <div className="row mt-3">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="mb-1" htmlFor="">
                Facebook
              </label>
              <input type="text" className="form-control" placeholder="url" />
            </div>
            <div className="mb-3">
              <label className="mb-1" htmlFor="">
                Twitter
              </label>
              <input type="text" className="form-control" placeholder="url" />
            </div>
            <div className="mb-3">
              <label className="mb-1" htmlFor="">
                Instagram
              </label>
              <input type="text" className="form-control" placeholder="url" />
            </div>
            <div className="mb-3">
              <label className="mb-1" htmlFor="">
                Whatsapp
              </label>
              <input type="text" className="form-control" placeholder="url" />
            </div>
            <div className="mb-3">
              <label className="mb-1" htmlFor="">
                Sitio Web
              </label>
              <input type="text" className="form-control" placeholder="url" />
            </div>
          </div>
        </div>
      </Collapse>
      <ActionsFormBottom />
    </div>
  )
}

export default DatosEmpresa
