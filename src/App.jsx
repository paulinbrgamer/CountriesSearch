import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import SearchContainer from './components/SearchContainer/SearchContainer'
import { Input } from "@/components/ui/input"
import { Button } from './components/ui/button'
function App() {
  const [Search, setSearch] = useState('')

  return (
    <div className='App'>
      <Header countries={['japao','america']} satisfied={['japao']}/>
      <Input type="text"
       placeholder="Search for a Countrie" 
       style={{padding:'26px',fontSize:'16pt',maxWidth:'420px'}}
       onChange={(e)=>console.log(e.target.value)
       }/>
       <Button  variant="outline" size="lg"  >
       <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-column-big"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><rect x="15" y="5" width="4" height="12" rx="1"/><rect x="7" y="8" width="4" height="9" rx="1"/></svg>
       </Button>
       <SearchContainer result={[]}/>
    </div>
  )
}

export default App
