import React, { useEffect, useRef, useState } from 'react'
import { FaPlay } from "react-icons/fa"
import { FaPause } from "react-icons/fa"
import { useSelector } from 'react-redux'
import "./AudioPlayer.css"


export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const audioPlayer = useRef();
    const progressBar = useRef();
    const animationRef = useRef();
    const [data, changedata] = useState({name: "",artist:"",image:"", id:""});

    const d =  useSelector(state => state.changethesong)
    useEffect(() => {
      if(d.length !== 0){
        changedata(d);
      }
      
    }, [d])
    

    

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
          audioPlayer.current.play();
          animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
          audioPlayer.current.pause();
          cancelAnimationFrame(animationRef.current);
        }
    }

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    }

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
        setCurrentTime(progressBar.current.value);
    }
    

  return (
    <div className='audio-player'>
        <audio ref={audioPlayer} src='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' preload="metadata"></audio>
        <div>
            <img src={data.image} alt = "songcover"/>
        </div>
        <h2 className='song-name'>{data.name}</h2>
        <h3 className='artist-name'>{data.artist}</h3>
        <div>
            <input type="range" className='progress-bar' defaultValue="0" ref={progressBar} onChange={changeRange}></input>
        </div>
        <div className='play-icons'>
            <button className='icons' onClick={togglePlayPause}>{isPlaying ? <FaPause/> : <FaPlay/>}</button>
        </div>
    </div>
  )
}

