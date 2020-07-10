import React from 'react'
import ItemListaPublicaciones from './ItemListaPublicaciones'

export const ListaPublicaciones = () => {
  return (
    <>
      <ul className="list-group">
        <ItemListaPublicaciones />
        <ItemListaPublicaciones />
        <ItemListaPublicaciones />
        <ItemListaPublicaciones />
        <ItemListaPublicaciones />
        <ItemListaPublicaciones />
        <ItemListaPublicaciones />
        <ItemListaPublicaciones />
        <ItemListaPublicaciones />
        <ItemListaPublicaciones />
      </ul>
      <hr />
      <nav aria-label="Page navigation example">
        <ul className="pagination flex justify-content-center">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
