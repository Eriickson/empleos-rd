import React from 'react'
import Redirect from 'next/router'

// Firebase
import firebase from 'firebase/app'
import { auth } from '../../firebase'

// My Components
import MasterPageLogin from '../../src/layout/MasterPageLogin'
import { Container } from '../../src/elements'
import { FormularioRegistrarEmpresa } from '../../src/components'

const NuevaEmpresa = () => {
  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const data = await auth.signInWithPopup(provider)

    // Si la empresa ya existe la enviamos a la página principal
    if (!data.additionalUserInfo.isNewUser) {
      Redirect.push('/app')
    }

    console.log(data.additionalUserInfo.isNewUser)
  }
  return (
    <MasterPageLogin title="Empresas">
      <Container>
        {/* <div className="row">
          <div className="offset-md-3 col-md-6 card py-3 px-3 px-md-5 mt-md-5">
            <p className="text-center h3 mb-4">Registrar empresa con:</p>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-primary mr-3"
                onClick={signInWithGoogle}
              >
                Google
              </button>
              <button className="btn btn-primary">Facebook</button>
            </div>
          </div>
        </div> */}
        <FormularioRegistrarEmpresa />
      </Container>
    </MasterPageLogin>
  )
}

export default NuevaEmpresa
