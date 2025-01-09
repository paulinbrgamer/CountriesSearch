import './style.css'
import '../../App.css'
import { useState } from 'react'
import { Button } from '../ui/button'
import ChartComponent from './ChartComponent'
export default function GraphComponent({ data, data2 }) {
  const [graph, setgraph] = useState('population')
  return (
    <div className='container'>
      <div style={{ textAlign: 'center', gap: '10px' }}>
        <Button size='lg' style={{ fontSize: '14pt', margin: '4px' }} onClick={() => setgraph('population')}>Population</Button>
        <Button size='lg' style={{ fontSize: '14pt', margin: '4px' }} onClick={() => setgraph('language')}>Language</Button>
        <h1>10 Most spoken languages in the world</h1>
      </div>
      <div className='container' style={{ width: 'clamp(100px,100%,800px)' }}>
        {graph === 'language' ? <ChartComponent data={data}maxValue={Object.keys(data).length}/> : <ChartComponent data={data2} maxValue={Object.keys(data2).reduce((acc,keys)=>{
          acc += data2[keys]
          return acc
        },0)}/>}
      </div>

    </div>
  )
}