import { useState, useEffect, useCallback ,useRef} from 'react'
import debounce from "lodash.debounce";
import './App.css'
import Header from './components/Header/Header'
import getCountries from './services/api'
import SearchComponent from './components/SearchComponent/SearchComponent';
import GraphComponent from './components/GraphComponent/GraphComponent';
function App() {
 const gComponentRef = useRef(null)
 function gotoGraph(){
  gComponentRef.current.scrollIntoView({behavior:'smooth'})
 }
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

  const lg = Countries.map((c) => c.languages?.map((l) => l.name)).flat().reduce((acc, element) => {
    acc[element] = (acc[element] || 0) + 1
    return acc
  }, {})
  let po = FiltedCountries.reduce((acc, obj) => {
    acc[obj.name] = obj.population
    return acc
  }, {World:7759438109})
  
  return (
    <div className='App'>
      <Header countries={Countries.length} satisfied={FiltedCountries.length} />
      <SearchComponent searchFunc={search} Countries={FiltedCountries} />
      <GraphComponent ref={gComponentRef} data2={Object.entries(po).sort(([,a],[,b])=>b-a).reduce((obj,[key,value])=>{obj[key]=value;return obj},{})}
        data={Object.entries(lg).sort(([, a], [, b]) => b - a).reduce((obj, [key, value]) => {
          obj[key] = value
          return obj
        }, {})} />
    </div>
  )
}

export default App
