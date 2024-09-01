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
    background: {
      default: '#F5F5F5',
      paper: '#E0E0E0',
    },
    text: {
      primary: '#000000',
      secondary: '#FFFFFF',
    },
  },
});

export const colors = {
    primary: '#001C98',
    secondary: '#FFC24A',
    error: '#FF3333',
    warning: '#FFE038',
    info: '#004CE8',
    success: '#00C247',
    background: '#F5F5F5',
    text: {
      primary: '#000000',
      secondary: '#FFFFFF',
    },
  }