import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Group,  UnstyledButton } from '@mantine/core';


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
                    <Group>
                        <img src="/src/assets/logo.svg" alt="" className="w-20 h-18" />
                        <span className="text-lg font-bold font-sans ">Certificados FISEI</span>
         
                    </Group>
          
                

            
           <Group className='font-semibold '>
            <UnstyledButton className=' hover:bg-gray-400 rounded-lg'>Inicio</UnstyledButton>
            <UnstyledButton className=' hover:bg-gray-400 rounded-lg'>Administracion</UnstyledButton>
            <UnstyledButton className=' hover:bg-gray-400 rounded-lg'>Contactanos</UnstyledButton>
          </Group>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md" className='bg-gradient-to-bl from-gray-300 font-bold text-center'>
        Opciones
        <Group className='font-semibold grid gap-4 grid-cols-1 px-2 py-4 my-2'>
            <UnstyledButton className=' hover:bg-gray-400 rounded-lg'>Generar Certificados</UnstyledButton>
            <UnstyledButton className=' hover:bg-gray-400 rounded-lg'>Agregar Curso</UnstyledButton>
            <UnstyledButton className=' hover:bg-gray-400 rounded-lg'>Agregar Firma</UnstyledButton>
            <UnstyledButton className=' hover:bg-gray-400 rounded-lg'>Agregar Plantilla</UnstyledButton>
        </Group>      
      </AppShell.Navbar>
      <AppShell.Main>Esto son las vistas de los componentes</AppShell.Main>
      
      <AppShell.Footer className='bg-gradient-to-tr from-sky-700'>
        

       foother
      </AppShell.Footer>
    </AppShell>
  );
}