import React from 'react'
import { Scrollbar } from 'react-scrollbars-custom'
import { css } from '@emotion/core'

export const AreaScroll = ({ children, height }) => {
  return (
    <Scrollbar
      css={css`
        width: 100%;
        height: ${height} !important;
        .ScrollbarsCustom-Track.ScrollbarsCustom-TrackY {
          width: 4px !important;
          margin-right: 5px;
          transition: 150ms;
          transition-delay: 150ms;

          &:hover {
            width: 7px !important;
            transition: 150ms;
            transition-delay: 150ms;
          }
          &:active {
            width: 7px !important;
            transition: 150ms;
            transition-delay: 150ms;
          }
        }
      `}
    >
      {children}
    </Scrollbar>
  )
}
