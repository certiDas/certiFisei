import { Button, Container, PasswordInput, TextInput } from "@mantine/core";




export default function Login() {
  return (
    <div>
      <Container  size="xs" h={150} bg="var(--mantine-color-blue-light)" className="flex items-center justify-center h-screen" >
        <form >
          <TextInput withAsterisk
          label="Usuario"
          placeholder="Ingrese el usario">

          </TextInput>
          <PasswordInput
          label="Contraseña"
          placeholder="Ingrese la contraseña"
          >
          

          </PasswordInput>

          <Button fullWidth top={15} >
            LogIn
          </Button>

        </form>
       

      </Container>
    </div>
  )
}