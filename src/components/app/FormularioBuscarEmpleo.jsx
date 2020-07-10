import React, { useState } from 'react'
import sortArray from 'sort-array'
import Link from 'next/link'

import provincias from '../../../json/provincias.json'

export const FormularioBuscarEmpleo = () => {
  const [buscador, setBuscador] = useState(null)
  const [localizacion, setLocalizacion] = useState(null)

  const provinciasOrder = sortArray(provincias, {
    by: 'provincia',
    order: 'asc',
  })

  return (
    <div className="row align-items-end mb-4">
      <div className="col-md-4 mb-3 mb-md-0">
        <div className="">
          <label className="h5" htmlFor="empleo">
            Publicación
          </label>
          <input
            type="text"
            className="form-control mt-1"
            name="buscador"
            onChange={(e) => {
              const value = e.target.value
                .replace(/ /g, '-')
                .toLocaleLowerCase()
              setBuscador(value)
            }}
            placeholder="Palabras Claves, títulos empresas, etc..."
          />
        </div>
      </div>
      <div className="col-md-4">
        <div className="position-relative">
          <label className="h5" htmlFor="empleo">
            Ubicación
          </label>
          <br />
          <select
            className="form-control"
            name="localizacion"
            onChange={(e) => setLocalizacion(e.target.value)}
          >
            <option value="">Ciudad o provincia</option>
            {provinciasOrder.map((provincia) => (
              <option value={provincia.id}>{provincia.provincia}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="col-md-2 mt-3 m-md-0">
        <Link href={{ pathname: 'busqueda', query: { q: buscador } }}>
          <a className="btn btn-block btn-primary">Buscar</a>
        </Link>
      </div>
    </div>
  )
}
