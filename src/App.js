import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './page/Home';
import BookingPage from './page/BookingPage';

function App() {
  return (
    <>

    <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='/booking' element={ <BookingPage/>} />
      <Route path='*' element={<h1>Sorry! There is no such page</h1>} />
    </Routes>

    </>
  );
}

export default App;
