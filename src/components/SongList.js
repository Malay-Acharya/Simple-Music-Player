import React from 'react'
import './SongList.css'
import { useDispatch } from 'react-redux/es/exports';
import { CHANGESONG } from '../actions';

export default function SongList({songs}) {
  const dispatch = useDispatch();

  return (
    <div className='song-list'>
        {songs.map((song) =>{
            return(
              <div key = {song.id} onClick = {() => {dispatch(CHANGESONG(song))}}>
                  <h3 className='song-list-item' >{song.name}</h3>
              </div>
                
            );
            
        })}
    </div>
  )
}
