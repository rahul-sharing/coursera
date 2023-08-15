import React from 'react'


const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <img src="images/lemon.jpg" alt="pic" width={30} height={40}/>
        <span>LITTLE LEMON</span>
      </div>
      <div className="navigation">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Menu</a></li>
          <li><a href="">Reservations</a></li>
          <li><a href="">Order Online</a></li>
          <li><a href="">Login</a></li>
        </ul>
      </div>
    </nav>

  )
}

export default Nav