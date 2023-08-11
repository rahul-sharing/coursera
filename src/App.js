import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
    <Header/>
    <Nav/>
    <Main/>
    <Footer/>
    <nav></nav>
    <main></main>
    <footer></footer>
      <p>Home Page</p>
    </div>
  );
}

export default App;
