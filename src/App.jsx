import { useState,useEffect ,useCallback } from 'react'
import debounce from "lodash.debounce";
import './App.css'
import Header from './components/Header/Header'
import SearchContainer from './components/SearchContainer/SearchContainer'
import { Input } from "@/components/ui/input"
import { Button } from './components/ui/button'
import getCountries from './services/api'
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
      <Input type="text"
       placeholder="Search for a Country" 
       style={{padding:'26px',fontSize:'16pt',maxWidth:'420px'}}
       onChange={search}/>

       <Button  variant="outline" size="lg"  >
       <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-column-big"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><rect x="15" y="5" width="4" height="12" rx="1"/><rect x="7" y="8" width="4" height="9" rx="1"/></svg>
       </Button>

       <SearchContainer result={FiltedCountries}/>
    </div>
  )
}

export default App
