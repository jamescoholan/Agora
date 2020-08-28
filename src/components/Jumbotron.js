/** @jsx jsx */
//import React from 'react'
import { css, jsx } from '@emotion/core'
import Button from './Button'
//import wallpaper from '../img/Agora/Agora..png'
//import wallpaper from '../img/BE/BE5.jpg'
//import wallpaper from '../img/Travis/TS2.jpg'
//import wallpaper from '../img/Dua/DL9.jpg'
import wallpaper from '../img/CH/Calvin6.jpg'
import logo from '../img/Logos/CHLogo1.png'
//import BackgroundVideo from './backgroundVideo'

/**
 * @function Section7
 */
const Jumbotron = ({ children }) => (
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
    padding-top: 120px;
    padding-left: 60px;
    max-width: 400px;
    color: white;
    padding-left: 60px;

    img {
      width: 150%;
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
export default Jumbotron
