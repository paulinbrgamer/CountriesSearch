import './Header.css'
import '../../App.css'
export default function Header({countries,satisfied}) {
  return (
    <div className="container">
        <h1>World Countries Data</h1>
        <h4>Currently, we have {countries}</h4>
        <h4>{satisfied} satisfied the search criteria</h4>
    </div>
  )
}
