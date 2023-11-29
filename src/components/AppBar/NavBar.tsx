import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Group,  UnstyledButton } from '@mantine/core';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { adminRoute, clientRoutes } from '../../utilities/routeApp';
import Home from '../viewClient/Home';
import Login from '../viewClient/Login';
import Certificados from '../viewAdmin/Certificados';
import Curso from '../viewAdmin/Curso';
import Firma from '../viewAdmin/Firma';
import Plantilla from '../viewAdmin/Plantilla';
import Contacto from '../viewClient/Contacto';



export default function NavBar() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 200,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened },
      }}
      footer={{ height: 60 }}
      padding="md"
    >
      <AppShell.Header className='bg-gradient-to-bl from-sky-700'>
        <Group h="100%" px="md">
            
            <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
                 <Group className='justify-between flex-1'>
                  <Link to={clientRoutes.home} >
                    <Group>
                        <img src="/src/assets/logo.svg" alt="" className="w-20 h-18" />
                        <span className="text-lg font-bold font-sans ">Certificados FISEI</span>
         
                    </Group>
                  </Link>
          
                

            
           <Group className='font-semibold '>
            <Link to={clientRoutes.home}>
            <UnstyledButton className=' hover:bg-gray-400 rounded-lg'>Inicio</UnstyledButton>
            </Link>

            <Link to={clientRoutes.administrador}>
            <UnstyledButton className=' hover:bg-gray-400 rounded-lg'>Administracion</UnstyledButton>
            </Link>

            <Link to={clientRoutes.contacto}> 
            <UnstyledButton className=' hover:bg-gray-400 rounded-lg'>Contactanos</UnstyledButton>
            </Link>
          </Group>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md" className='bg-gradient-to-bl from-gray-300 font-bold text-center'>
        Opciones
        <Group className='font-semibold grid gap-4 grid-cols-1 px-2 py-4 my-2'>
            <Link to={adminRoute.generarCerti}>

            <UnstyledButton className=' hover:bg-gray-400 rounded-lg'>Generar Certificados</UnstyledButton>
            </Link>

            <Link to={adminRoute.cargarCurso}>
            <UnstyledButton className=' hover:bg-gray-400 rounded-lg'>Agregar Curso</UnstyledButton>
            </Link>

            <Link to={adminRoute.cargarFirma}>
            <UnstyledButton className=' hover:bg-gray-400 rounded-lg'>Agregar Firma</UnstyledButton>
            </Link>

            <Link to={adminRoute.cargarPalntilal}>

            <UnstyledButton className=' hover:bg-gray-400 rounded-lg'>Agregar Plantilla</UnstyledButton>
            </Link>
        </Group>      
      </AppShell.Navbar>
      <AppShell.Main>
        
      <Routes>

<Route path={clientRoutes.default} element={<Home />} />
<Route path={clientRoutes.home} element={<Home />} />
<Route path={clientRoutes.administrador} element={<Login />} />
<Route path={clientRoutes.contacto} element={<Contacto />} />


<Route path={adminRoute.generarCerti} element={<Certificados />} />
<Route path={adminRoute.cargarCurso} element={<Curso />} />

  <Route path={adminRoute.cargarFirma} element={<Firma />} />
  <Route path={adminRoute.cargarPalntilal} element={<Plantilla />} />




</Routes>

      </AppShell.Main>
      
      <AppShell.Footer className='bg-gradient-to-tr from-sky-700'>
        

       foother
      </AppShell.Footer>
    </AppShell>
  );
}