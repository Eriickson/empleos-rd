import React from 'react'

const IdiomaFormularioNuevaVacante = ({ idioma }) => {
  return (
    <div className="d-flex flex-column flex-md-row mb-1">
      <div className="form-check mr-md-5">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="ingles"
        />
        <label className="form-check-label" htmlFor="ingles">
          {idioma}
        </label>
      </div>
      <div className="d-flex ml-4">
        <div className="form-check mr-3">
          <input
            className="form-check-input"
            type="radio"
            name={`idioma-${idioma}`}
            id={`basico-${idioma}`}
          />
          <label className="form-check-label" htmlFor={`basico-${idioma}`}>
            Básico
          </label>
        </div>
        <div className="form-check mr-3">
          <input
            className="form-check-input"
            type="radio"
            name={`idioma-${idioma}`}
            id={`intermedio-${idioma}`}
          />
          <label className="form-check-label" htmlFor={`intermedio-${idioma}`}>
            Intermedio
          </label>
        </div>
        <div className="form-check mr-3">
          <input
            className="form-check-input"
            type="radio"
            name={`idioma-${idioma}`}
            id={`avanzado-${idioma}`}
          />
          <label className="form-check-label" htmlFor={`avanzado-${idioma}`}>
            Avanzado
          </label>
        </div>
      </div>
    </div>
  )
}

export default IdiomaFormularioNuevaVacante
