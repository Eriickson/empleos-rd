import React from 'react'

export const Collapse = ({ children, name, title, isVisible, styles }) => {
  return (
    <div className="" css={styles}>
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
      <div className={`collapse ${isVisible && 'show'}`} id={`${name}`}>
        <div className="">{children}</div>
      </div>
    </div>
  )
}
