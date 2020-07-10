import React, { useEffect, useState } from 'react'

import { Container, ScreenLoader, Collapse } from '../src/elements'
import MasterPage from '../src/layout/MasterPage'
import {
  FormularioBuscarEmpleo,
  ListaPublicaciones,
  DetallesPublicacion,
} from '../src/components'
import Router from 'next/router'

const App = () => {
  const [Loading, setLoading] = useState(false)
  const showLoadingScreen = (url) => {
    let enlace = `${url}`
    const incluir = enlace.includes('publicacion')
    setLoading(incluir)
  }

  useEffect(() => {
    Router.events.on('routeChangeStart', showLoadingScreen)
    // Router.events.on('routeChangeComplete', showLoadingScreen)
  }, [])

  return (
    <MasterPage>
      <Container>
        <Collapse title="Nueva Busqueda">
          <FormularioBuscarEmpleo />
        </Collapse>

        <div className="row mt-3">
          <div className="col-md-5">
            <ListaPublicaciones />
          </div>
          <DetallesPublicacion />
        </div>
        <ScreenLoader isVisible={Loading} />
      </Container>
    </MasterPage>
  )
}

export default App
