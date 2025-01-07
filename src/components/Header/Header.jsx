import './Header.css'
import '../../App.css'
export default function Header({countries,satisfied}) {
  return (
    <div className="container">
        <h1>World Countries Data</h1>
        <h4>Currently, we have {countries.length}</h4>
        <h4>{satisfied.length} satisfied the search criteria</h4>
    </div>
  )
}
