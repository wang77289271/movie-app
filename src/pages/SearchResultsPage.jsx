import { useContext } from 'react'
import SearchResults from '../components/SearchResults/SearchResults'
import { SearchResultsContext } from './../SearchResultsContext'
import './SearchResultsPage.css'

const SearchResultsPage = () => {
  const searchResults = useContext(SearchResultsContext)
  const searchResultsData = searchResults.searchData

  return (
    <div className="search_result_container">
      <div className="search_result_title">
        <h1>
          {searchResultsData.total_results > 0
            ? 'The following results are found based on your search '
            : 'No search results found for '}
          <span>" {searchResults.searchItem} "</span>.
        </h1>
      </div>
      {searchResultsData.total_results > 0 ? (
        <div className="search_result_content">
          <SearchResults searchResults={searchResultsData} />
        </div>
      ) : (
        <div>
          <h1 style={{ color: '#fff' }}>No result found</h1>
          {/* Popular movies */}
        </div>
      )}
    </div>
  )
}

export default SearchResultsPage
