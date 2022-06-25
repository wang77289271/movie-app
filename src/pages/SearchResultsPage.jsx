import { useContext } from 'react'
import SearchResults from '../components/SearchResults/SearchResults'
import { SearchResultsContext } from './../SearchResultsContext'

const SearchResultsPage = () => {
  const data = useContext(SearchResultsContext)
  console.log(data)

  return (
    <div className="searchResults_container">
      <SearchResults />
    </div>
  )
}

export default SearchResultsPage
