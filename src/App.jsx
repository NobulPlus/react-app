import './App.css';
import Footer from './layouts/Footer/Footer';
import Header from './layouts/Header/Header';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Header/>
          <Routes>
            <Route path = '/' element={<Home/>}/>
          </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
