import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import { SearchResultsContext } from './../SearchResultsContext'
import Footer from './../components/Footer/Footer'

const Main = () => {
  const [searchData, setSearchData] = useState('')
  const [searchItem, setSearchItem] = useState('')
  const search_all = { searchData, searchItem }

  return (
    <div id="main">
      <Nav
        searchingData={(data) => setSearchData(data)}
        searchingItem={(data) => setSearchItem(data)}
      />
      <SearchResultsContext.Provider value={search_all}>
        <Outlet />
      </SearchResultsContext.Provider>
      <Footer />
    </div>
  )
}

export default Main
