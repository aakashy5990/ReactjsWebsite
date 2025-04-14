import React, { useRef } from 'react'
import './VideoPlayer.css'
import videoframe from "../../assets/videoframe.mp4"

function VideoPlayer({playState,setPlayState}) {

  const player = useRef(null);

  const closePlayer = (e) =>{
    if(e.target === player.current){
      setPlayState(false);
    }
  }

  return (
    <div className={`video-player ${playState?'':'hide'}`}>
      <video src={videoframe} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer