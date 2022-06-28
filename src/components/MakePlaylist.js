import React, { useState } from 'react'
import { Allsongdata } from './Allsongdata';
import './makeplaylist.css'

export default function MakePlaylist() {

    const [currentsong, setcurrentsong] = useState("Select the song")

  return (
    <div>
        <form onSubmit={(e)=>{
            e.preventDefault();
            console.log("submitted");
        }}>
            <input type='text' placeholder = 'Name of the playlist'></input>
            <label>Select the song</label>
            <select
            value={currentsong}
            onChange={(e) => setcurrentsong(e.target.value)}>
            <option></option>
            {Allsongdata.map((song) => {
              return (
                <option value={song.name} key={song.id}>
                  {song.name}
                </option>
              );
            })}
          </select>
          <button>Submit</button>
        </form>
    </div>
  )
}
