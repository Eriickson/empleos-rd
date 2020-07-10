import React from 'react'
import { Collapse } from '../../elements'

const Filtro = () => {
  return (
    <div className="card p-3">
      <Collapse title="Mostrar Filtros">
        <div className="d-flex justify-content-between mb-3">
          <p className="mb-0">Filtro</p>
          <p className="mb-0">Limpiar Filtro</p>
        </div>
        <div className="mb-3">
          <p className="h6">Cuidad</p>
          <select name="" id="" className="form-control">
            <option value="">Ciudad</option>
          </select>
        </div>
        <div className="mb-3">
          <p className="mb-2 h6">Jornada</p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="medio-tiempo"
            />
            <label className="form-check-label" for="medio-tiempo">
              Medio Tiempo
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="tiempo-completo"
            />
            <label className="form-check-label" for="tiempo-completo">
              Tiempo Completo
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="contrato"
            />
            <label className="form-check-label" for="contrato">
              Por contrato
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="temporal"
            />
            <label className="form-check-label" for="temporal">
              Temporal
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="comision"
            />
            <label className="form-check-label" for="comision">
              Por Comisión
            </label>
          </div>
        </div>
        <div className="mb-3">
          <p className="h6">Tipo de trabajo</p>
          <select name="" id="" className="form-control">
            <option value="">Tipo</option>
          </select>
        </div>
        <div className="mb-3">
          <p className="h6">Idiomas</p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="ingles"
            />
            <label className="form-check-label" for="ingles">
              Inglés
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="frances"
            />
            <label className="form-check-label" for="frances">
              Francés
            </label>
          </div>
        </div>
        <div className="mb-3">
          <p className="h6">Publicado</p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="ayer"
            />
            <label className="form-check-label" for="ayer">
              Ayer
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="ultima-semana"
            />
            <label className="form-check-label" for="ultima-semana">
              Última Semana
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="ultimo-mes"
            />
            <label className="form-check-label" for="ultimo-mes">
              Último mes
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="ultimo-anyo"
            />
            <label className="form-check-label" for="ultimo-anyo">
              Último año
            </label>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary">Filtrar</button>
        </div>
      </Collapse>
    </div>
  )
}

export default Filtro
