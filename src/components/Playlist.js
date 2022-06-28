import React, { useState } from 'react'
import Lists from './Lists'
import MakePlaylist from './MakePlaylist'
import './Playlist.css'

export default function Playlist() {
  const[click, setclick] = useState(true)
  return (
    <div className='playlist'>
      <div className='playlist-header'>
        <h2>MY PLAYLISTS</h2>
        <button onClick={() =>{setclick(!click)}} className='add-playlist'><h2>{click === true?(<>CLOSE</>):(<>ADD</>)}</h2></button>
      </div>
      {click?(<MakePlaylist/>):(<></>)}
      <Lists/>
    </div>
  )
}
