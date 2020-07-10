import React from 'react'

export const TPContainerHeader = ({ children, name, center }) => {
  return (
    <ul
      className={`nav nav-tabs ${center && 'justify-content-center'}`}
      id={`${name}`}
      role="tablist"
    >
      {children}
    </ul>
  )
}
export const TPContainerBody = ({ children, name }) => {
  return (
    <div className="tab-content p-2" id={`${name}Content`}>
      {children}
    </div>
  )
}
export const TabNav = ({ name, title, isActive }) => {
  return (
    <li className="nav-item" role="presentation">
      <a
        className={`nav-link ${isActive && 'active'}`}
        id={`${name}-tab`}
        data-toggle="tab"
        href={`#${name}`}
        role="tab"
        aria-controls={`${name}`}
        aria-selected="true"
      >
        {title}
      </a>
    </li>
  )
}
export const TabBody = ({ name, children, isActive }) => {
  return (
    <div
      className={`tab-pane fade ${isActive && 'show active'}`}
      id={`${name}`}
      role="tabpanel"
      aria-labelledby={`${name}-tab`}
    >
      {children}
    </div>
  )
}
