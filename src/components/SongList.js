import React from 'react'
import './SongList.css'

export default function SongList({songs}) {
  return (
    <>
        {songs.map((song) =>{
            return(
                <h3 key = {song.id}>{song.name}</h3>
            );
            
        })}
    </>
  )
}
