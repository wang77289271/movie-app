import { useEffect } from 'react'
import { useState } from 'react'
import Nav from '../components/Nav/Nav'
import SearchResults from '../components/SearchResults/SearchResults'

const SearchResultsPage = () => {
  const [searchData, setSearchData] = useState([])
  const searchingDataHandler = (data) => {}
  return (
    <div className="searchResults_container">
      <Nav searchingData={searchingDataHandler} />
      <SearchResults searchData={'test'} />
    </div>
  )
}

export default SearchResultsPage
