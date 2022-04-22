import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import FormInputText from '../FormInput/FormInputText';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import AvailCheckbox from '../AvailCheckbox/AvailCheckbox';
import { EventAvailable } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#5584AC',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function CrudFormGroup() {
  return (
    <Box  justifyContent="center" sx={{ flexGrow: 1,
                width: '50%' }}>
      <Stack spacing={2}>
        <Item>
            <label> Age: </label>
            <FormInputText/>
        </Item>
        <Item>
            <label> Description: </label>
            <FormInputText/>
        </Item>
        <Item>
            <label> Name: </label>
            <FormInputText/>
        </Item>
        <Item>
            <label> Breed: </label>
            <FormInputText/>
        </Item>
        <Item>
            <label> Disposition: </label>
            <DropDownMenu/>
        </Item>
        <Item>
            <label> Availability: </label>
            <AvailCheckbox/>
        </Item>
      </Stack>
    </Box>
  );
}
export default CrudFormGroup;