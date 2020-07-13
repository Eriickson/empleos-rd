import React from 'react'
import { ActionsFormBottom, Modal } from '../../../elements'

const CuentaEmpresa = () => {
  return (
    <>
      <div className="container p-0 mt-3">
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="mb-1" htmlFor="">
                Usuario
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="mb-1" htmlFor="">
                Correo electrónico
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="mb-1" htmlFor="">
                Contraseña
              </label>
              <br />
              <Modal
                name="cambiar-contrasenya"
                labelButton="Cambiar Contraseña"
                classNameButton="btn btn-primary"
              >
                <div className="container dark-modal-cambiar-contrasenya">
                  <div className="row dark-modal-cambiar-contrasenya">
                    <div className="col-md-4 offset-md-4 dark-modal-cambiar-contrasenya">
                      <div className="card p-4">
                        <p className="lead text-center">Cambiar Contraseña</p>
                        <div className="mb-2">
                          <label className="mb-1" htmlFor="">
                            Actual
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="mb-2">
                          <label className="mb-1" htmlFor="">
                            Nueva
                          </label>
                          <input type="text" className="form-control" />
                        </div>

                        <div className="mb-2">
                          <label className="mb-1" htmlFor="">
                            Confirmar
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="d-flex justify-content-end mt-3">
                          <button
                            className="btn btn-outline-danger mr-2 dark-modal-cambiar-contrasenya"
                            type="button"
                          >
                            Cancelar
                          </button>
                          <input
                            type="submit"
                            className="btn btn-primary"
                            value="Guardar Cambios"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
            <div className="mb-3">
              <div className="mb-3">
                <label className="mb-1" htmlFor="">
                  Insignias
                </label>
                <ul className="pl-3">
                  <li className="list-unstyled mb-2">
                    <div className="btn-group w-100 d-flex justify-content-between">
                      <span className="badge bg-primary">Programador Web</span>
                      <span className="badge bg-secondary">x</span>
                    </div>
                  </li>
                  <li className="list-unstyled mb-2">
                    <div className="btn-group w-100 d-flex justify-content-between">
                      <span className="badge bg-danger">Diseñador Gráfico</span>
                      <span className="badge bg-secondary">x</span>
                    </div>
                  </li>
                  <li className="list-unstyled mb-2">
                    <div className="btn-group w-100 d-flex justify-content-between">
                      <span className="badge bg-success">Sistemas</span>
                      <span className="badge bg-secondary">x</span>
                    </div>
                  </li>
                  <li className="list-unstyled mb-2">
                    <div className="btn-group w-100 d-flex justify-content-between">
                      <span className="badge bg-warning">Programador Web</span>
                      <span className="badge bg-secondary">x</span>
                    </div>
                  </li>
                </ul>
                <div className="btn-group w-100">
                  <input type="text" className="form-control" />
                  <button className="btn btn-primary">Agregar</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label className="mb-1" htmlFor="">
                Idioma
              </label>
              <select className="form-control" name="" id="">
                <option value="">Inglés</option>
              </select>
            </div>
            <div className="mb-4 form-check form-switch">
              <label htmlFor="estado" className="form-label">
                Estado
              </label>
              <input className="form-check-input" type="checkbox" id="estado" />
            </div>
          </div>
          <ActionsFormBottom />
        </div>
      </div>
    </>
  )
}

export default CuentaEmpresa
