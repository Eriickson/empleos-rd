import React, { useEffect, useState } from 'react'
import { Perfil as P } from '../../src/components'
import { isAuth } from '../../src/hooks'
import Router from 'next/router'
import { ScreenLoader } from '../../src/elements'

const Perfil = () => {
  const { autenticado } = isAuth()

  useEffect(() => {
    if (autenticado !== null) {
      autenticado ? null : Router.push('/app')
      console.log(autenticado)
    }
  }, [autenticado])

  if (!autenticado) {
    return <ScreenLoader />
  }

  return <P />
}
export default Perfil
