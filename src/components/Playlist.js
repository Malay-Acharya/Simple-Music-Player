import React from 'react'
import Lists from './Lists'
import './Playlist.css'

export default function Playlist() {
  return (
    <div className='playlist'>
      <div className='playlist-header'>
        <h2>MY PLAYLISTS</h2>
        <button className='add-playlist'><h2>ADD</h2></button>
      </div>
      <Lists/>
    </div>
  )
}
