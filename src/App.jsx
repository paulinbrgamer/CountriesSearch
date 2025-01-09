import { useState, useEffect, useCallback ,useRef} from 'react'
import debounce from "lodash.debounce";
import './App.css'
import Header from './components/Header/Header'
import getCountries from './services/api'
import SearchComponent from './components/SearchComponent/SearchComponent';
import GraphComponent from './components/GraphComponent/GraphComponent';
import { Github } from 'lucide-react';
function App() {
 let gComponentRef = useRef(null)
 const scrollToGraph = () => {
  if (gComponentRef.current) {
    gComponentRef.current.scrollIntoView({ behavior: "smooth" });
  }
};
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
      <div>
      <a href="https://github.com/paulinbrgamer/CountriesSearch">
      <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
      </a>
      </div>
      <Header countries={Countries.length} satisfied={FiltedCountries.length} />
      <SearchComponent scroll={scrollToGraph} searchFunc={search} Countries={FiltedCountries} />
      <GraphComponent ref={gComponentRef} data2={Object.entries(po).sort(([,a],[,b])=>b-a).reduce((obj,[key,value])=>{obj[key]=value;return obj},{})}
        data={Object.entries(lg).sort(([, a], [, b]) => b - a).reduce((obj, [key, value]) => {
          obj[key] = value
          return obj
        }, {})} />
    </div>
  )
}

export default App
