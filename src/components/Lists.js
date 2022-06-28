import React, { useState } from 'react'
import './list.css'
import SongList from './SongList';

export default function Lists() {
    const lists = [{id:'1',name:"playlist1", songs:[{code:'123'}, {code:'234'}, {code:'567'}]}, {id:'2',name:"playlist2",songs:[{code:'321'}, {code:'2134'}, {code:'5467'}]}]
    const [song, setsongs] = useState([]);
    const [cid, setcid] = useState();
    const songfunction = (list) =>{
        console.log(song.length)
        if(song.length === 0){
            setsongs(list.songs)
            setcid(list.id);
        }
        else{
            setsongs([])
            setcid()
        }
        
    }
  return (
    <div className='lists'>{
        lists.map((list,index)=>{return (
            <div key = {index} onClick={() => {songfunction(list)}}>
                <h2 className='list-item'>{list.name}</h2>
                {list.id === cid?(<SongList songs = {song}/>):(<></>)}
            </div>
        )         
        })
        }</div>
  )
}
