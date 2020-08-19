import React from 'react'
import { css, jsx } from '@emotion/core'
//import Button from './Button'
import wallpaper from '../img/CH/CH4K.jpg'
import logo from '../img/Logos/CHLogo1.png'
//import { Player } from 'video-react';
import sample from './site.mp4'


  
/**
 * @function Section3
 */
const Section3 = ({ children }) => (
  <div css={JumbotronCSS}>
    <div className="synopsis">

      
    <video className= "video-wrapper" autoPlay loop muted>
    <source src={sample} type='video/mp4'/>
    </video>
  
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
export default Section3
