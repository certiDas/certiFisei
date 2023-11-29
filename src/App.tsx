
import './App.css'
import '@mantine/core/styles.css';

import {  MantineProvider } from '@mantine/core';
import NavBar from './components/AppBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import { adminRoute, clientRoutes } from './utilities/routeApp';
import Home from './components/viewClient/Home';
import Login from './components/viewClient/Login';
import Certificados from './components/viewAdmin/Certificados';
import Curso from './components/viewAdmin/Curso';
import Firma from './components/viewAdmin/Firma';
import Plantilla from './components/viewAdmin/Plantilla';






function App() {
 

  return (
    <MantineProvider>
      <NavBar/>
      

         
          
              

    </MantineProvider>

  
    
  )
}

export default App
