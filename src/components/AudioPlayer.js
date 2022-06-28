import React, { useEffect, useRef, useState } from 'react'
import { BsSkipForwardFill } from "react-icons/bs"
import { BsSkipBackwardFill } from "react-icons/bs"
import { FaPlay } from "react-icons/fa"
import { FaPause } from "react-icons/fa"
import "./AudioPlayer.css"


export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const audioPlayer = useRef();
    const progressBar = useRef();
    const animationRef = useRef();

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
        <audio ref={audioPlayer} src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3" preload="metadata"></audio>
        <h2 className='song-name'>SMELLS LIKE TEEN SPIRIT</h2>
        <h3 className='artist-name'>NIRVANA</h3>
        <div>
            <input type="range" className='progress-bar' defaultValue="0" ref={progressBar} onChange={changeRange}></input>
        </div>
        <div className='play-icons'>
            <button className='icons'><BsSkipBackwardFill/></button>
            <button className='icons' onClick={togglePlayPause}>{isPlaying ? <FaPause/> : <FaPlay/>}</button>
            <button className='icons'><BsSkipForwardFill/></button>
        </div>
    </div>
  )
}

