import React from 'react'
import * as Feather from 'react-feather'
import { Collapse } from '../../elements'

const InformacionPublicacion = () => {
  return (
    <div className="col-md-9">
      <div className="row">
        <div className="cabecera col-10">
          <p className="h3">Buscamos programador y desarollador Web</p>
          <div className="d-flex flex-wrap">
            <div className="mr-4 mb-2">
              <Feather.Clock className="mr-2" />
              <span>Hace 2 meses</span>
            </div>
            <div className="mr-4 mb-2">
              <Feather.MapPin className="mr-2" />
              <span>Santiago de los Caballeros</span>
            </div>
            <div className="mr-4 mb-2">
              <Feather.Zap className="mr-2" />
              <span>Tiempo Completo</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-10">
          <div className="mb-2 d-flex">
            <Feather.User />
            <span className="ml-2 h6">Diseñador Gráfico</span>
          </div>
          <div className="mb-2 d-flex">
            <Feather.DollarSign />
            <span className="ml-2 h6">25,000</span>
          </div>
          <div className="mb-2 d-flex">
            <Feather.Hash />
            <span className="ml-2 h6">5</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10">
          <div className="mb-3">
            <p className="h5">Descripción</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              earum iure nostrum fugiat eaque eum ut sit quod impedit, ipsa
              voluptas autem adipisci inventore placeat iusto a ratione
              recusandae. Aliquid! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Dolorum ea error, ullam a doloremque aspernatur
              assumenda ducimus vero, eius eveniet quas. Quibusdam
              necessitatibus veniam ipsam iusto esse ea natus placeat.
            </p>
          </div>
          <div className="mb-3">
            <Collapse name="requisitos" title="Requisitos (+4)">
              <ul>
                <li>Este es el requisito más esperado</li>
                <li>Este es el más esperado</li>
                <li>Este es el requisito más </li>
                <li>Este es el más esperado</li>
                <li>El requisito más esperado</li>
              </ul>
            </Collapse>
          </div>
          <div className="mb-3">
            <Collapse name="conocimientos" title="Conocimientos (+6)">
              <ul>
                <li>Este es el requisito más esperado</li>
                <li>Este es el más esperado</li>
                <li>Este es el requisito más </li>
                <li>Este es el más esperado</li>
                <li>El requisito más esperado</li>
              </ul>
            </Collapse>
          </div>
          <div className="mb-3">
            <Collapse name="beneficios" title="Beneficios (+10)">
              <ul>
                <li>Este es el requisito más esperado</li>
                <li>Este es el más esperado</li>
                <li>Este es el requisito más </li>
                <li>Este es el más esperado</li>
                <li>El requisito más esperado</li>
              </ul>
            </Collapse>
          </div>
          <div className="mb-3">
            <p className="h5">Idiomas</p>
            <ul>
              <li>Inglés</li>
              <li>Alemán</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InformacionPublicacion
