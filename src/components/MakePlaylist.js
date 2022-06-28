import React, { useState } from 'react'
import { Allsongdata } from './Allsongdata';
import './makeplaylist.css'
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { ADDSONG } from '../actions';

export default function MakePlaylist() {

    const dispatch = useDispatch();
    const [currentsong, setcurrentsong] = useState('Select the song')
    const [name, setname] = useState();

  return (
    <div className='playlist-formpage'>
        <form className='playlist-form' onSubmit={(e)=>{
            e.preventDefault();
            const index = Allsongdata.map(object => object.name).indexOf(currentsong); 
            console.log(index)
            dispatch(ADDSONG(name, Allsongdata[index]));
        }}>
            <input type='text' placeholder = 'Name of the playlist' className='name-play' onChange={(e) => {setname(e.target.value)}}></input>
            <label>Select the song</label>
            <select className='play-select'
            value={currentsong}
            onChange={(e) => {setcurrentsong(e.target.value)}}>
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
