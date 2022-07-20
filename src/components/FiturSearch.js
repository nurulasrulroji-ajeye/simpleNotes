import React from 'react'

const FiturSearch = ({ onSearch, query }) => {
  return (
    <>
      <input onChange={onSearch} value={query} className='search' type="text" placeholder='Search Notes...' />
    </>
  )
}

export default FiturSearch
