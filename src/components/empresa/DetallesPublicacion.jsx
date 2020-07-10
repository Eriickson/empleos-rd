import React from 'react'
import { css } from '@emotion/core'

import {
  TPContainerHeader,
  TPContainerBody,
  TabBody,
  TabNav,
  Modal,
  AreaScroll,
} from '../../elements'
import DetallesPostulados from './DetallesPostulados'

const DetallesPublicacion = () => {
  return (
    <Modal
      name="publicacion"
      labelButton={
        <p className="w-max-content m-2">Desarrollador Web y Diseñador web</p>
      }
    >
      <div className="container">
        <div className="row">
          <div className="offset-md-2 col-md-8">
            <div className="card p-3">
              <h2>Desarrollador Web y Diseñador web</h2>
              <div>
                <TPContainerHeader name="publicacion-info" center={true}>
                  <TabNav
                    isActive={true}
                    title={'Información'}
                    name="informacion-publicacion"
                  />
                  <TabNav
                    title={
                      <p className="mb-0">
                        <span className="badge bg-success">+50</span> Postulados
                      </p>
                    }
                    name="postulados"
                  />
                </TPContainerHeader>
                <TPContainerBody name="publicacion-info">
                  <TabBody name="informacion-publicacion" isActive={true}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aut nulla numquam minima laboriosam nam? Illum debitis,
                    dolorum, autem quibusdam rem maiores inventore unde vero
                    nobis officiis placeat, quasi recusandae quod. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Labore eum iure
                    debitis itaque sunt, laborum ipsam incidunt. Officiis
                    architecto ut obcaecati. Perspiciatis natus fugiat hic
                    maiores, exercitationem et illum iste.
                  </TabBody>
                  <TabBody name="postulados">
                    <AreaScroll height={'80vh'}>
                      <DetallesPostulados />
                    </AreaScroll>
                  </TabBody>
                </TPContainerBody>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default DetallesPublicacion
