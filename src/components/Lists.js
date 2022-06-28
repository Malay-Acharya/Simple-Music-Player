import React from 'react'
import './list.css'

export default function Lists() {
    const lists = [{id:'1',name:"playlist1"}, {id:'2',name:"playlist2"}]
  return (
    <div className='lists'>{
        lists.map((list)=>{
            return(
                    <h2 className='list-item' key = {list.id}>{list.name}</h2>
            );
        })
        }</div>
  )
}
