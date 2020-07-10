import React from 'react'
import TabPillEmpresa from './TabPillEmpresa'
import { css } from '@emotion/core'
import * as Feather from 'react-feather'

export const EmpresaTemplate = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <div>
            <div className="d-flex justify-content-center p-2 mb-2">
              <img src="/img/uno.png" className="img-fluid rounded" alt="" />
            </div>
            <p className="h2 mb-2 d-md-none">Uno Call Center</p>
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
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <p className="h2 mb-5 d-none d-md-block">Uno Call Center</p>

          <TabPillEmpresa />

          {/* <div>
            <p
              className="descripcion justify"
              css={css`
                text-align: justify;
              `}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, fuga
              dicta, qui voluptates nemo aliquam commodi esse saepe labore,
              deserunt quidem aliquid tempora. Labore maiores quod asperiores
              totam quidem reprehenderit. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Illum eius, odio repudiandae maxime
              quas tenetur esse amet vero sunt voluptas qui, possimus voluptatum
              voluptate ducimus libero alias? Consectetur, magnam dolorem!
            </p>
          </div> */}
        </div>
      </div>
    </>
  )
}
