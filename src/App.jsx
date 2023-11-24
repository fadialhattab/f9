import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'

function App() {

  const users = JSON.parse(localStorage.getItem('user'))
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
             exact path="/" 
              element={users ? <Home /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/login" 
              element={!users ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!users ? <Signup /> : <Navigate to="/" />} 
            />
               <Route 
              path="/logged" 
              element={<Home/>} 
            />
               <Route 
              path="/signed" 
              element={<Home/>} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
