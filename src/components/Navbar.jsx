import React from 'react'
import {useState, useEffect} from 'react'
import './Navbar.css'
//import {Link} from 'react-router-dom'

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
  }

  }, [])

  return (
    <div>
      <nav>
      {(toggleMenu || screenWidth > 500) && (
      <ul className='list'>
        <li className="items">HOME</li>
        <li className="items">SCHEDULE</li>
        <li className="items">PROFILE</li>
        <li className="items">DASHBOARD</li>
        <li className="items">SIGN IN </li>
        <li className="items">SIGN UP</li>
        
      </ul>
      )}
      <button onClick={toggleNav} className="btn">|||</button>
      </nav>
    </div>
  )
}

export default Navbar
