import { ThemeProvider } from '@mui/material/styles'
import FormLogin from './pages/Login'
import { theme } from './context/themeContext'

function App() {
 

  return (
    <>
    <ThemeProvider theme={theme}>
      <FormLogin/>
    </ThemeProvider>
    </>
  )
}

export default App
