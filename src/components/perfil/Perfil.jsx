import React, { useState, useEffect } from 'react'
import * as Feather from 'react-feather'
import MasterPage from '../../layout/MasterPage'
import { Container } from '../../elements'
import TabPill from './TabPill'
import { css } from '@emotion/core'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const Perfil = () => {
  const [vistaReclutamiento, setVistaReclutamiento] = useState(null)
  const { query } = useRouter()
  const vista = query.reclutar

  useEffect(() => {
    if (vista == 'true') {
      setVistaReclutamiento(true)
    }
  }, [vista])

  return (
    <MasterPage>
      <Container>
        <div className="row">
          <div className="col-md-3">
            <div>
              <div className="card p-2">
                <img
                  src="https://checkout.hites.com/wcsstore/HitesCAS/images/catalog/1000x1000/MUJER%20JUVENIL/766053001.jpg"
                  className="img-fluid rounded"
                  alt=""
                />
              </div>
              <Link
                href="/perfil/editar/[username]"
                as="/perfil/editar/erickson01d"
              >
                <a className="btn btn-primary btn-block my-3">Editar Perfil</a>
              </Link>
              <div className="mb-2">
                <span className="mr-2 badge bg-warning">Desarrollador Web</span>
                <span className="mr-2 badge bg-success">Diseñador Gráfico</span>
                <span className="mr-2 badge bg-primary">UX/UI</span>
              </div>
              <div className="d-flex flex-column">
                <p>
                  <Feather.Phone className="mr-1" /> +1 (829) 816-0959
                </p>
                <p>
                  <Feather.Mail className="mr-1" /> Erickson01d@gmail.com
                </p>
                <p>
                  <Feather.MapPin className="mr-1" /> Santiago/Rep. Dom.
                </p>
                <p>
                  <Feather.FileText className="mr-1" /> CV
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="d-flex align-items-center">
              <p className="h5 mb-0 mr-3">Erickson Manuel Holguín</p>
              {vistaReclutamiento && (
                <button className="btn btn-success btn-sm">Reclutar</button>
              )}
            </div>
            <div>
              <p className="mb-1 lead">Quién Soy?</p>
              <p
                className="descripcion justify"
                css={css`
                  text-align: justify;
                `}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                fuga dicta, qui voluptates nemo aliquam commodi esse saepe
                labore, deserunt quidem aliquid tempora. Labore maiores quod
                asperiores totam quidem reprehenderit. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Illum eius, odio repudiandae
                maxime quas tenetur esse amet vero sunt voluptas qui, possimus
                voluptatum voluptate ducimus libero alias? Consectetur, magnam
                dolorem!
              </p>
            </div>
            <TabPill />
          </div>
        </div>
      </Container>
    </MasterPage>
  )
}
