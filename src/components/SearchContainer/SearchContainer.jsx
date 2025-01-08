import React from 'react'
import '../../App.css'
import CountrieContainer from './CountrieContainer/CountrieContainer'

export default function SearchContainer({result}) {

  
  return (
    <div className='container' style={{flexDirection:"row",flexWrap:'wrap',maxHeight:'100dvh',overflow:"scroll"}}>
      {result.map((data)=><CountrieContainer data={data} key={data.name}/>  )}     
    </div>
  )
}
