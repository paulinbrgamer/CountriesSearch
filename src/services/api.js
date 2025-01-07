import axios from "axios"
const api = 'https://restcountries.com/v2/all'
export default async  function getCountries() {
    try{
        const {data} =  await axios.get(api)
        return data
        
    }catch(error)
    {
        console.error(error)
    }
    

}