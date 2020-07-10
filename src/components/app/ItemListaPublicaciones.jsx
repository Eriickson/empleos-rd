import React from 'react'
import Link from 'next/link'
import * as Feather from 'react-feather'

const ItemListaPublicaciones = () => {
  const id = "desarrollador-web"
  return (
    <li className="card p-3 mb-2">
      <div>
        <div className="d-flex justify-content-between">
          <Link href="/publicacion/[id]" as={`publicacion/${id}`}>
            <a>
              <h5>Desarrollador web</h5>
            </a>
          </Link>
          <Feather.Bookmark />
        </div>
        <p className="d-flex">
          <Feather.MapPin className="mr-2" />
          Puñal, Santiago de los Caballeros
        </p>
        <p className="descripcion">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit corporis sunt nulla possimus voluptatibus laboriosam
          libero dolorem. sunt nulla possimus voluptatibus laboriosam libero
          dolorem.
        </p>
        <div className="d-flex justify-content-between">
          <span>Dominicana Tours</span>
          <span>
            <Feather.Clock className="mr-2" />
            hace 2 meses
          </span>
        </div>
      </div>
    </li>
  )
}

export default ItemListaPublicaciones
