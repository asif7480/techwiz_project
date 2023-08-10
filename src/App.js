import './App.css';
// import Home from './Pages/Home';
import Home from './pages/home';
import Navbar from './pages/navbar';
import Gallery from './pages/gallery';
// import Gallery from './Pages/Gallery';
// import Contact from './Pages/Contact';
// import Feedback from './Pages/Feedback';
// import Navbar from './Components/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Gallery' element={<Gallery />} />
          {/* <Route path='/Contact' element={<Contact />} />
          <Route path='/Feedback' element={<Feedback />} /> */}
          <Route path='/*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
