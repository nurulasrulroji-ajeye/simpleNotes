import React from 'react'
import { showFormattedDate } from '../utils/fakeDB'

const ItemHeader = ({ title, createdAt }) => {
  return (
    <div className='container-header'>
      <h3 className="title">{title}</h3>
      <h4 className="tanggal">
        {showFormattedDate(createdAt)}
      </h4>
    </ div>
  )
}

export default ItemHeader
