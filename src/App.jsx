import React, { useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Home from './pages/Home-page'
import Register from './pages/Register';
import './App.css'
function App() {
  useEffect(() => {
    AOS.init({
      // Global settings
      once:false
    });
  }, []);
  return (
    <>
     <div className='inner-width'>
      <Home/>
      <Register/>
     </div>
    </>
  )
}

export default App



