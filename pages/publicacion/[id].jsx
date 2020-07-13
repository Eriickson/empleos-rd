import React from 'react'
import * as Feather from 'react-feather'

import MasterPage from '../../src/layout/MasterPage'
import { Container, Collapse, Modal } from '../../src/elements'
import Link from 'next/link'
import { isAuth } from '../../src/hooks'
import PublicacionTemplate from '../../src/components/Publicacion/PublicacionTemplate'

const Publicacion = () => {
  const { role, autenticado } = isAuth()

  return (
    <MasterPage screenLoader={true}>
      <Container>
        <PublicacionTemplate />
      </Container>
    </MasterPage>
  )
}

export default Publicacion
