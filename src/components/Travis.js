/** @jsx jsx */
import React, { useCallback } from 'react'
import { css, jsx } from '@emotion/core'
import ContentBlock from './ContentBlock'
import Icon from './Icon'

import one from '../img/Travis/TS1.jpg'
import two from '../img/Travis/TS2.jpg'
import three from '../img/Travis/TS3.jpg'
import four from '../img/Travis/TS4.jpg'
import five from '../img/Travis/TS7.png'
import six from '../img/Travis/TS6.jpg'
const content = [one, two, three, four, five, six]

/**
 * @function TravisRow
 */
const TravisRow = ({ category, setActive }) => {
  const getPos = useCallback(e => {
    const pos = e.target.parentElement.getBoundingClientRect()
    setActive({ category, pos })
  }, [])

  return (
    <div
      className="TravisRow"
      css={css`
        padding-left: 60px;
        overflow-x: hidden;

        .ContentBlock {
          flex: 18vw;
          flex-shrink: 0;
          height: 9.5vw;
          margin-right: 4px;
        }
      `}
    >
      <div
        css={css`
          h2 {
            margin: 20px 0 10px;
            color: white;
          }

          .block-wrapper {
            display: flex;
            width: 100%;
            position: relative;
          }
        `}
      >
        <h2>{category}</h2>

        <div className="block-wrapper">
          {content.map(img => (
            <ContentBlock key={img} img={img}>
              <Icon type="play" />
              <Icon type="info-circle" onClick={getPos} />
            </ContentBlock>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TravisRow
