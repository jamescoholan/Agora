/** @jsx jsx */
import React, { useCallback } from 'react'
import { css, jsx } from '@emotion/core'
import ContentBlock from './ContentBlock'
import Icon from './Icon'

import one from '../img/CH/Calvin1.jpg'
import two from '../img/CH/Calvin2.jpg'
import three from '../img/CH/Calvin3.jpg'
import four from '../img/CH/Calvin4.jpg'
import five from '../img/CH/Calvin5.jpg'
import six from '../img/CH/Calvin6.jpg'

const content = [one, two, three, four, five, six]

/**
 * @function CalvinRow
 */
const CalvinRow = ({ category, setActive }) => {
  const getPos = useCallback(e => {
    const pos = e.target.parentElement.getBoundingClientRect()
    setActive({ category, pos })
  }, [])

  return (
    <div
      className="CalvinRow"
      css={css`
        padding-left: 60px;
        overflow-x: hidden;

        .ContentBlock {
          flex: 18vw;
          flex-shrink: 0;
          height: 9.5vw;
          margin-right: 4px;
          margin-bottom: 50px;
        }
      `}
    >
      <div
        css={css`
          h2 {
            margin: 20px 10px;
            color: white;
          }

          .block-wrapper {
            display: flex;
            width: 100%;
            position: fixed;
            padding-top: 780px;
            overflow-x: hidden;
          }
        `}
      >
        <h2>{category}</h2>

        <div className="block-wrapper">
          {content.map(img => (
            <ContentBlock key={img} img={img}>
              
            </ContentBlock>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CalvinRow
