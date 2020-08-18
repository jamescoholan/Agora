import React from "react"
import classes from './BGVideo.css
const BackgroundVideo = () => {
    const videoSource = "./Video/site.mp4"
    return (
        <div className={classes.Container}>
            <video autoPlay="autoPlay" loop="loop" muted className = {classes.Video}>
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )

export default BackgroundVideo
