import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function CheckboxLabels() {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Available" />
      <FormControlLabel control={<Checkbox />} label="Not Available" />
      <FormControlLabel control={<Checkbox />} label="Adopted" />
      <FormControlLabel control={<Checkbox />} label="Pending" />
    </FormGroup>
  );
}
export default CheckboxLabels;