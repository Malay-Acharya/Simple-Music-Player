import React, { useState } from 'react'
import { Allsongdata } from './Allsongdata';
import './makeplaylist.css'

export default function MakePlaylist() {

    const [currentsong, setcurrentsong] = useState("Select the song")

  return (
    <div className='playlist-formpage'>
        <form className='playlist-form' onSubmit={(e)=>{
            e.preventDefault();
            console.log("submitted");
        }}>
            <input type='text' placeholder = 'Name of the playlist' className='name-play'></input>
            <label>Select the song</label>
            <select className='play-select'
            value={currentsong}
            onChange={(e) => setcurrentsong(e.target.value)}>
            <option></option>
            {Allsongdata.map((song) => {
              return (
                <option className='play-option' value={song.name} key={song.id}>
                  {song.name}
                </option>
              );
            })}
          </select>
          <button className='play-submit'>Submit</button>
        </form>
    </div>
  )
}
