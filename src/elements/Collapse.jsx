import React from 'react'

export const Collapse = ({ children, name, title }) => {
  return (
    <>
      <button
        className="btn-collapse btn btn-primary"
        type="button"
        data-toggle="collapse"
        data-target={`#${name}`}
        aria-expanded="false"
        aria-controls={`${name}`}
      >
        {title}
      </button>
      <div className="collapse" id={`${name}`}>
        <div className="">{children}</div>
      </div>
    </>
  )
}
