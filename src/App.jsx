import { useState,useEffect ,useCallback } from 'react'
import debounce from "lodash.debounce";
import './App.css'
import Header from './components/Header/Header'
import getCountries from './services/api'
import SearchComponent from './components/SearchComponent/SearchComponent';
import GraphComponent from './components/GraphComponent/GraphComponent';
function App() {

  const [Countries, setCountries] = useState([])
  const [FiltedCountries, setFiltedCountries] = useState([])

  const search = useCallback(
    debounce((e) => {
      if (e.target.value) {
        setFiltedCountries(
          Countries.filter((cty) =>
            cty.name.toUpperCase().includes(e.target.value.toUpperCase())
          )
        );
      } else {
        setFiltedCountries(Countries);
        
      }
    }, 200),
    [Countries]
  );
  useEffect(() => {
    const fetchdata = async () => {
      const getdata = await getCountries()
      setCountries(await getdata)
      setFiltedCountries(getdata);
      
    }
    fetchdata()
    
  }, [])
  return (
    <div className='App'>
      <Header countries={Countries.length} satisfied={FiltedCountries.length}/>
      <SearchComponent searchFunc={search} Countries={FiltedCountries}/>
      <GraphComponent languages={FiltedCountries.map((c)=>c.languages?.map((l)=>l.name)).flat().reduce((acc,element)=>{
      acc[element] = (acc[element] ||0)+1
      return acc
    },{})}/>
    </div>
  )
}

export default App
