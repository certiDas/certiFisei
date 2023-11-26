
import './App.css'
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import NavBar from './components/AppBar/NavBar';






function App() {
 

  return (
    <MantineProvider>
      <NavBar/>
     

    </MantineProvider>

  
    
  )
}

export default App
