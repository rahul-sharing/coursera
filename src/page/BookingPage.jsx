import React, { useEffect, useState } from 'react'

const BookingPage = () => {
  const [values, setValues] = useState({
    date:"",
    time:"",
    guest:"",
    occasion: "",
  })



    const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(values)
 
  }

  const handleChange = (e) =>{
    setValues({...values, [e.target.name]: e.target.value})
  }


  return (
    <div className='formContent'>
      
      <form >
        <div>
          <label for="res-date">Choose date:</label>
          <input type="date" id="res-date"value={values.date} name="date" onChange={handleChange} />
        </div>
        <div>
          <label for="res-time">Choose time:</label>
          <select id="res-time " value={values.time} name="time" onChange={handleChange} >
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
        </div>
        <div>
          <label for="guests">Number of guests:</label>
          <input type="number" placeholder="1" min="1" max="10" id="guests" value={values.guest} name="guest" onChange={handleChange}  />
        </div>
        <div>
          <label for="occasion">Occasion:</label>
          <select id="occasion" value={values.occasion} name="occasion" onChange={handleChange} >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
        <input type="submit" value="Make Your reservation" className='btn' onClick={handleSubmit}/>
      </form>
    </div>

  )
}

export default BookingPage