import React, { useEffect, useRef, useState } from 'react'
import { BsSkipForwardFill } from "react-icons/bs"
import { BsSkipBackwardFill } from "react-icons/bs"
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
    const [id, changeid] = useState(1109737);
    const [data, changedata] = useState({name: "",artist:"",image:"", id:""});

    const d =  useSelector(state => state.changethesong)
    useEffect(() => {
      if(d.length !== 0){
        console.log(d);
        changedata(d);
      }
      
    }, [d])
    

    // useEffect(() => {
    //     const options = {
    //         method: 'GET',
    //         url: `https://deezerdevs-deezer.p.rapidapi.com/track/${id}`,
    //         headers: {
    //           'X-RapidAPI-Key': '2d8f5d7671msh2e3ae3aa508357ep1ee87djsnaa4dc93728dc',
    //           'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    //         }
    //       };
          
    //       axios.request(options).then(function (response) {
    //           changeData(response.data);
    //           console.log(response.data)
    //       }).catch(function (error) {
    //           console.error(error);
    //       });
    // }, [id])
    

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
        <audio ref={audioPlayer} src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Yodel_Sound_Effect.mp3' preload="metadata"></audio>
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

