import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GlobalStyles } from './styles/GlobalStyles.ts'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './context/themeContext.ts'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles/>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </StrictMode>,
)
