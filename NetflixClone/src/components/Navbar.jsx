import React from 'react'
import {Link} from 'react-router-dom'
import {ImSearch} from "react-icons/im"

function Navbar() {
  console.log("Developer: sidhantyadav1999@gmail.com")
  return (
    <div className='Navbar'>
        <img src="netflix.png" width="12%" height="12%"></img>

        <div>
            <Link to="./home">Home</Link>
            <Link to="./movies">Movies</Link>
            <Link to="./series">Series</Link>
        </div>

            <ImSearch/>
    </div>
  )
}

export default Navbar