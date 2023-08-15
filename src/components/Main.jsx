import React from 'react'
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const navigate = useNavigate()
  return (
    <main>
      <div className="textArea">
        <h1>Little Lemon</h1>
        <h4>Chicago</h4>
        <p>We are a family owned meditarean restaurant, focus on traditional racipies and serve with a modern twist</p>
        <button className='btn' onClick={()=> navigate("/booking")}>Reserve a Table</button>
      </div>
      <img className='heroImg' src="images/heroImg.jpg" alt="" />
    </main>
  )
}

export default Main