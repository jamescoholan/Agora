/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import Button from './Button'
import wallpaper from '../img/BE/BE5.jpg'
import logo from '../img/Logos/BELogo3.png'

/**
 * @function Section7
 */
const Section7 = ({ children }) => (
  <div css={JumbotronCSS}>
    <div className="synopsis">
      <img src={logo} />
      
      <Button icon="play">Play</Button>
      <Button icon="info-circle">More Info</Button>
  
    </div>
    {children}
  </div>
)

const JumbotronCSS = css`
  position: relative;
  background-image: url('${wallpaper}');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 109vh;
  top: 0;

  .synopsis {
    padding-top: 0px;
    padding-left: 60px;
    max-width: 400px;
    color: white;
    padding-left: 60px;

    img {
      width: 80%;
    }

   .Icon {
      margin-right: 10.5px;
      font-size: 18px;
    }
  }

  .ContentRow {
    position: absolute;
    bottom: 20px;
  }
`
export default Section7
