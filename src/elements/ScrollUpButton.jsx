import React from 'react'
import ReactScrollUpButton from 'react-scroll-up-button'
import * as Feather from 'react-feather'
import { css } from '@emotion/core'

export const ScrollUpButton = () => {
  return (
    <ReactScrollUpButton
      ContainerClassName="AnyClassForContainer"
      TransitionClassName="AnyClassForTransition"
      ShowAtPosition={1000}
    >
      <Feather.ArrowUpCircle
        css={css`
          width: 2.5rem;
          height: 2.5rem;
        `}
      />
    </ReactScrollUpButton>
  )
}
