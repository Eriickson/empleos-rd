import React from 'react'
import CountUp from 'react-countup'
import MasterPage from '../src/layout/MasterPage'
import * as Feather from 'react-feather'
import { Container } from '../src/elements'
import { FormularioBuscarEmpleo } from '../src/components'

const Index = () => {
  return (
    <MasterPage titulo="Inicio" saludo="555">
      <Container>
        <FormularioBuscarEmpleo />
        <div className="row">
          <div className="col-3 mt-3">
            <p className="d-flex align-items-center">
              <Feather.Clock className="mr-2" />
              Últimas Busquedas
            </p>
            <ul className="">
              <li className="">Ingenieria en sistemas</li>
              <li className="">Ama de Casa</li>
              <li className="">Pintor</li>
              <li className="">Programador Web</li>
              <li className="">Diñenador Gráfico</li>
            </ul>
          </div>
          <div className="col-3 mt-3">
            <p className="d-flex align-items-center">
              <Feather.ArrowUp className="mr-2" />
              Cuidades con mayor Demandas
            </p>
            <ul className="">
              <li className="">
                Santiago (<CountUp end={550} />)
              </li>
              <li className="">
                Santo Domigo (<CountUp end={250} />){' '}
              </li>
              <li className="">
                Puerto Plata (<CountUp end={1050} separator="," />)
              </li>
              <li className="">
                La Vega (<CountUp end={450} separator="," />)
              </li>
              <li className="">
                La Romana (<CountUp end={150} separator="," />)
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </MasterPage>
  )
}

export default Index
