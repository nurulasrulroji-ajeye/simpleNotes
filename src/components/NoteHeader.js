import React from 'react'
import { useState, useEffect } from 'react'
import FiturSearch from './FiturSearch'
import './NoteHeader.css'

const NoteHeader = ({ onSearch, query }) => {
  const [navbar, setNavbar] = useState(false)

  const changeBg = () => {
    if (window.scrollY >= 60) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBg()
    window.addEventListener("scroll", changeBg)
  }, [])

  return (
    <header className={navbar ? "navbar active" : "navbar"}>
      <nav>
        <h2 className='logo'>Simple Notes App</h2>
        <FiturSearch onSearch={onSearch} query={query} />
      </nav>
    </header>
  )
}

export default NoteHeader
