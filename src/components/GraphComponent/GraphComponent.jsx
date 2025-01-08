import './style.css'
import '../../App.css'
import { useState } from 'react'
import { Button } from '../ui/button'
import ChartComponent from './ChartComponent'
export default function GraphComponent({languages}) {
    const chartData = [
        { month: "January", desktop: 186, mobile: 80 },
        { month: "February", desktop: 305, mobile: 200 },
        { month: "March", desktop: 237, mobile: 120 },
        { month: "April", desktop: 73, mobile: 190 },
        { month: "May", desktop: 209, mobile: 130 },
        { month: "June", desktop: 214, mobile: 140 },
      ]
      const chartConfig = {
        desktop: {
          label: "Desktop",
          color: "#2563eb",
        },
        mobile: {
          label: "Mobile",
          color: "#60a5fa",
        },
      }
    const [graph, setgraph  ] = useState('population')
    return(
        <div className='container'>
            <div style={{textAlign:'center',gap:'10px'}}>
                <Button size='lg' style={{fontSize:'14pt',margin:'4px'}} onClick={()=>setgraph('population')}>Population</Button>
                <Button size='lg' style={{fontSize:'14pt',margin:'4px'}} onClick={()=>setgraph('language')}>Language</Button>
                <h1>10 Most spoken languages in the world</h1>
            </div>
            <div className='container'>
            {graph==='language'?<ChartComponent data={languages}/>:null}
            </div>

        </div>
    )
}