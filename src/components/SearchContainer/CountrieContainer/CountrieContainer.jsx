import { data } from 'autoprefixer';
import '../../../App.css'
import './CountrieContainer.css'
const DataComponent = ({strong,value})=>{
    return(
        <div style={{display:'flex',alignSelf:'start',gap:'4px'}}>
            <strong>{strong}: </strong> <p> {value}</p>
        </div>
    )
}
export default function CountrieContainer({data:{flag,name,capital,languages,population,currencies}}) {
  return (
    <div className='container' style={{width:'clamp(300px,50%,400px)'}}>
        <div style={{display:'flex',flexDirection:'column',textAlign:'center',gap:'16px'}}>
        <img className='flag' src={flag} alt="bandeira" />
        <strong>{name}</strong>
        </div>
        <DataComponent strong="Capital" value={capital}/>
        <DataComponent strong="Language" value={languages[0].name?languages[0].name:null}/>
        <DataComponent strong="Population" value={Intl.NumberFormat('pt-BR').format(population)}/>
        <DataComponent strong="Currency" value={currencies?.[0]?.code?? null}/>

    </div>
  )
}
