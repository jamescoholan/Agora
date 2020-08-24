/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import Button from './Button'
import wallpaper from '../img/MM/mm.jpg'
import logo from '../img/Logos/MMLogo.png'
import sample from './CH1.mp4'
//import "../node_modules/video-react/dist/video-react.css";


//<video className= "video-wrapper" autoPlay loop muted playsInline width={1790} height={1000}>
//    <source src={sample} type='video/mp4' />
//    </video>

/**
 * @function Section4
 */
const Section4 = ({ children }) => (
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
    padding-left: 0px;
    max-width: 400px;
    color: white;

    .video-wrapper {
      background-size: cover;
      position: absolute;
     }

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
export default Section4
