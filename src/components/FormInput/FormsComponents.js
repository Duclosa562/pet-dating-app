import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import FormInputText from '../FormInput/FormInputText';
import FormInputDescription from '../FormInput/FormInputDescription';
import FormInputBreed from '../FormInput/FormInputBreed';
import FormInputAge from '../FormInput/FormInputAge';
import FormInputName from '../FormInput/FormInputName';
import DropDownMenuAge from '../DropDownMenu/DropDownMenuAge';
import DropDownMenuAgeUnits from '../DropDownMenuAgeUnits/DropDownMenuAgeUnits';
import AvailCheckbox from '../AvailCheckbox/AvailCheckbox';
import { EventAvailable } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#5584AC',
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function CrudFormGroup() {
  return (
    <Box  justifyContent="center" sx={{ flexGrow: 1,
                width: '100%' }}>
      <Stack spacing={2}>
        <Item>
            <label> Name: </label>
            <FormInputName/>
        </Item>
        <Item>
            <label> Age: </label>
            <FormInputAge/>
        </Item>
        <Item>
            <label> Age Units: </label>
            <DropDownMenuAgeUnits/>
        </Item>
        <Item>
            <label> Breed: </label>
            <FormInputBreed/>
        </Item>
        <Item>
            <label> Description: </label>
            <FormInputDescription justifyContent="center"></FormInputDescription>
        </Item>
        <Item>
            <label> Disposition: </label>
            <DropDownMenuAge/>
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