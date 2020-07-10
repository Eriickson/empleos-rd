import React from 'react'
import { useRouter } from 'next/router'
import Filtro from './Filtro'
import MasterPage from '../../layout/MasterPage'
import { Container } from '../../elements'
import { ListaPublicaciones } from '../app/ListaPublicaciones'

export const BusquedaTemplate = () => {
  const router = useRouter()
  console.log(router)

  return (
    <MasterPage>
      <Container>
        <div className="row mb-4">
          <div className="col-10">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Palabras Claves, títulos empresas, etc..."
              />
              <button className="btn btn-success">Buscar</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mb-2">
            <Filtro />
          </div>
          <div className="col-12 col-md-7">
            <ListaPublicaciones />
          </div>
        </div>
      </Container>
    </MasterPage>
  )
}
