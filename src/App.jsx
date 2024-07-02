import './App.css';
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
      </Router>
    </>
  );
}

export default App;
