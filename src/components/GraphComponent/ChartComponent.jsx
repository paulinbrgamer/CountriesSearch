import React from 'react'
import '../../App.css'
export default function ChartComponent({ data ,maxValue}) {
    const size = maxValue
    console.log(size);
    
    return (
        <div style={{ display: 'grid', alignItems: "center", gridTemplateColumns: '1fr 4fr 1fr', width: '100%', padding: "4px  " }}>
            <div>
                {Object.keys(data).map((k, idx) => idx < 10 ? <p style={{ fontSize: "12pt", padding: '5px', margin: '2px' }} key={k}>{k}</p> : null)}

            </div>
            <div style={{ width: 'clamp(100px,80%,600px)' }}>
                {
                    Object.keys(data).map((keys, idx) => idx < 10 ?
                        <div style={{ backgroundColor: 'orange', padding: '16px', borderRadius: '4px', margin: '4px', width: `${(100*data[keys])/size}%` }} key={keys}>

                        </div> : null)
                }
            </div>
            <div>
                {Object.keys(data).map((k, idx) => idx < 10 ? <p style={{ fontSize: "12pt", padding: '5px', margin: '2px' }} key={k + 'a'}>{data[k]}</p> : null)}

            </div>
        </div>
    )
}
