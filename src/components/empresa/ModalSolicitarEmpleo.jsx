import React from 'react'
import {
  Modal,
  TPContainerHeader,
  TPContainerBody,
  TabBody,
  TabNav,
} from '../../elements'
import Link from 'next/link'

const ModalSolicitarEmpleo = () => {
  return (
    <div>
      <Modal
        name="solicitar-empleo"
        classNameButton="btn btn-info btn-block mb-3"
        labelButton="Solicitar Empleo"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="card p-3">
                <TPContainerHeader name="solicitar-empleo" center={true}>
                  <TabNav name="solicitar" title="Solicitar" isActive={true} />
                  <TabNav name="vacantes-actuales" title="Vacantes Actuales" />
                </TPContainerHeader>
                <TPContainerBody name="solicitar-empleo">
                  <TabBody name="solicitar" isActive={true}>
                    <form className="mt-4">
                      <div className="mb-3">
                        <label htmlFor="titulo" className="mb-1">
                          Agrega un Titulo
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="titulo"
                          autoFocus
                          autoComplete="off"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="descripcion" className="mb-1">
                          Descripción
                        </label>
                        <textarea
                          name="descripcion"
                          id="descripcion"
                          cols="30"
                          rows="10"
                          className="form-control"
                        ></textarea>
                      </div>
                      <div className="d-flex justify-content-end">
                        <button
                          type="reset"
                          className="btn btn-outline-danger mr-2 dark-modal-solicitar-empleo"
                        >
                          Cancelar
                        </button>
                        <button className="btn btn-primary mr-2">Enviar</button>
                      </div>
                    </form>
                  </TabBody>
                  <TabBody name="vacantes-actuales">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <Link
                          href="/publicacion/[id]"
                          as="/publicacion/vacante-1"
                        >
                          <a target="_blank">Vacante disponible #1</a>
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link
                          href="/publicacion/[id]"
                          as="/publicacion/vacante-2"
                        >
                          <a target="_blank">Vacante disponible #2</a>
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link
                          href="/publicacion/[id]"
                          as="/publicacion/vacante-3"
                        >
                          <a target="_blank">Vacante disponible #3</a>
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link
                          href="/publicacion/[id]"
                          as="/publicacion/vacante-4"
                        >
                          <a target="_blank">Vacante disponible #4</a>
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link
                          href="/publicacion/[id]"
                          as="/publicacion/vacante-5"
                        >
                          <a target="_blank">Vacante disponible #5</a>
                        </Link>
                      </li>
                    </ul>
                  </TabBody>
                </TPContainerBody>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ModalSolicitarEmpleo
