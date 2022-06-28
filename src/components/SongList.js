import React from 'react'
import './SongList.css'

export default function SongList({songs}) {
  return (
    <>
        {songs.map((song) =>{
            return(
                <h3 key = {song.code}>{song.code}</h3>
            );
            
        })}
    </>
  )
}
