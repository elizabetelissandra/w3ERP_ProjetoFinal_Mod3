import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface InputPasswordProps {
    handleClick: () => void;
    handleMouseDown: (event: React.MouseEvent<HTMLButtonElement>) => void;
    show: boolean;
}

const InputPassword:React.FC<InputPasswordProps> = ({handleClick, handleMouseDown, show}) => {


  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <FormControl sx={{ mt: 1, width: '28ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={show ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClick}
                  onMouseDown={handleMouseDown}
                  edge="end"
                >
                  {show ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
    </Box>
  );
}

export default InputPassword