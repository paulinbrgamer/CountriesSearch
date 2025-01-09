import React from "react";
import '../../App.css'
import SearchContainer from '../SearchContainer/SearchContainer'
import { Input } from "../ui/input"
import { Button } from '../ui/button'
export default function SearchComponent({searchFunc,Countries,scroll}) {
    
    return(
        <div className="App" style={{width:'100%',height:'100dvh',justifyContent:"start"}}>
            <Input type="text"
             placeholder="Search for a Country" 
             style={{padding:'26px',fontSize:'16pt',maxWidth:'420px'}}
             onChange={searchFunc}/>
            <Button onClick={scroll}  className="p-4 text-lg"  >
            <p>Graphcs</p>
            </Button>
            <SearchContainer result={Countries}/>
        </div>
    )
}