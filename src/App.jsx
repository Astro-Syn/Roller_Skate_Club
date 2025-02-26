
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import About from './routes/About'
import Home from './routes/Home'
import Instructors from './routes/Instructors'
import Events from './routes/Events'
import Contact from './routes/Contact'

function App() {
 

  return (
    <>
      <div className=''>
        <Router>
         < Navbar />
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/instructors' exact element={< Instructors />}></Route>
            <Route path='/about' exact element={< About />}></Route>
            <Route path='/events' exact element={< Events />}></Route>
            <Route path='/contact' exact element={< Contact/>}></Route>
         </Routes>
        </Router>

      </div>
    </>
  )
}

export default App
