import { createTheme} from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light' || 'dark',
    primary: {
      main: '#001C98',
    },
    secondary: {
      main: '#FFC24A',
    },
    error: {
      main: '#FF3333',
    },
    warning: {
      main: '#FFE038',
    },
    info: {
      main: '#004CE8',
    },
    success: {
      main: '#00C247',
    },
    
  }
});