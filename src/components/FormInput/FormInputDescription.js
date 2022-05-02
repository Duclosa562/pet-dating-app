import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function FormInputText( {data} ) {
    return (
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '70ch', height: '100%' },
          }}
          noValidate
          autoComplete="off"
        >
        <div>
            <TextField
              size="large"
              required
              id="outlined-required"
              label="Required"
              defaultValue="Write Something Fun or Informative!"
            />
        </div>
        </Box>
      );
    }
export default FormInputText