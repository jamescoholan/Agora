  import React from 'react'
  import { css, jsx } from '@emotion/core'
  import Button from './Button'
  import wallpaper from '../img/CH/CH4K.jpg'
  import logo from '../img/Logos/CHLogo1.png'
  import CalvinRow from "./Calvin"

  import sample from './TS.mp4'

  /**
   * @function Section33
   */
  const Section33 = ({ children }) => (
    <div css={JumbotronCSS}>
      <div className="synopsis">

      
      <CalvinRow />
      <video className= "video-wrapper" autoPlay loop muted width={1793}
          height={1000} fluid playsInline startTime>
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
        background-size: auto;
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
      bottom: 200px;
    }
  `
  export default Section33
