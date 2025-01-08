import React from 'react'
import '../../App.css'
export default function ChartComponent({data}) {
    const size = data.length
    let cropdata = {}
    for(let i=0;i<10;i++){
        if(Object.keys(data)[i]){
            cropdata[Object.keys(data)[i]] = data[Object.keys(data)[i]]
        }
       
    }
    console.log(cropdata);
    
  return (
    <div style={{width:'clamp(300px,900px,900px)',border:'1px solid gray'}}>
        {Object.keys(cropdata).map((keys)=>
        <div style={{backgroundColor:'orange',padding:'8px',borderRadius:'4px',margin:'4px',width:`${(1*cropdata[keys])}%`}} key={keys}>
            {cropdata[keys]}
        </div>)}
    </div>
  )
}
