
const Filter = ({query, setQuery, setFilterParam}) => {

  return (
    <div className="input-fields">
      {/* Search countries by name or capital */}
      <input type="text"
       className="search" 
       placeholder="Filter country by name or capital" 
       value={query}
       onChange={(e)=>setQuery(e.target.value)}/>

       {/* Search countries by region */}
      <select className="drop-down-menu" onChange={(e)=>setFilterParam(e.target.value)}>
        <option value="All" className="filter">Filter by Region</option>
        <option value="africa" className="africa">Africa</option>
        <option value="americas" className="america">America</option>
        <option value="asia" className="asia">Asia</option>
        <option value="europe" className="europe">Europe</option>
        <option value="oceania" className="oceania">Oceania</option>
      </select>
    </div>
  )
}

export default Filter
