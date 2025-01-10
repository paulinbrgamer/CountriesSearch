import React from 'react'
import '../../App.css'
export default function ChartComponent({ data ,maxValue,heigth}) {
    const size = maxValue
    
    return (
        <div style={{ display: 'grid', alignItems: "center", gridTemplateColumns: '1fr 4fr 1fr', width: '100%', padding: "4px  ",overflow:'hidden'  ,whiteSpace: 'nowrap' }}>
            <div>
                {Object.keys(data).map((k, idx) => idx < heigth ? <p style={{ fontSize: "12pt", padding: '5px', margin: '2px' }} key={k}>{k}</p> : null)}

            </div>
            <div style={{ width: 'clamp(100px,100%,600px)' }}>
                {
                    Object.keys(data).map((keys, idx) => idx < heigth ?
                        <div style={{ backgroundColor: 'orange', padding: '16px 0px ', borderRadius: '4px', margin: '4px', width: `${(100*data[keys])/size}%` }} key={keys}>

                        </div> : null)
                }
            </div>
            <div>
                { Object.keys(data).map((k, idx) => idx < heigth ? <p style={{ fontSize: "12pt", padding: '5px', margin: '2px' ,textAlign:"end"}} key={k + 'a'}>{Intl.NumberFormat('pt-BR').format(data[k])}</p> : null)}

            </div>
        </div>
    )
}
