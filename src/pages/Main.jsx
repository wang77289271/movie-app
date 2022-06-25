import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import { SearchResultsContext } from './../SearchResultsContext'

const Main = () => {
  const [searchData, setSearchData] = useState('')

  return (
    <div id="main">
      <Nav searchingData={(d) => setSearchData(d)} />
      <SearchResultsContext.Provider value={searchData}>
        <Outlet />
      </SearchResultsContext.Provider>
    </div>
  )
}

export default Main
