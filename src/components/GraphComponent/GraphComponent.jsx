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
        <h1>{graph==='language'?'10 Most spoken languages in the world':'10 Most populated countries in the world'}</h1>
      </div>
      <div className='container' style={{ width: 'clamp(100px,100%,800px)' }}>
        {graph === 'language' ? <ChartComponent heigth={10} data={data}maxValue={Object.keys(data).length}/> : <ChartComponent heigth={11} data={data2} maxValue={data2.World}/>}
      </div>

    </div>
  )
}