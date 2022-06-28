import React, { useState } from 'react'
import './list.css'
import SongList from './SongList';
import { useSelector } from 'react-redux/es/exports';

export default function Lists() {
    // const [lists,changelists] = useState([{id:'1',name:"playlist1", songs:[{code:'123'}, {code:'234'}, {code:'567'}]}, {id:'2',name:"playlist2",songs:[{code:'321'}, {code:'2134'}, {code:'5467'}]}]);
    const lists = useSelector((state) => state.changeplaylist) 
     
    const [song, setsongs] = useState([]);
    const [cid, setcid] = useState();
    const songfunction = (list) =>{
        if(song.length === 0){
            setsongs(list.song)
            setcid(list.name);
        }
        else{
            setsongs([])
            setcid()
        }
        
    }
  return (
    <div className='lists'>{
        lists.map((list,index)=>{return (
            <div key = {index}>
                <div onClick={() => {songfunction(list)}}>
                <h2 className='list-item'>{list.name}</h2>
                </div>
                {list.name === cid?(<SongList songs = {song}/>):(<></>)}
            </div>
        )         
        })
        }</div>
  )
}
