import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { spacing } from '@mui/system';



function DropDown() {

  const [ageUnits, setAgeUnits] = React.useState('');

  const handleChange = (event) => {
    setAgeUnits(event.target.value);
  };
  // sx={{ m: 1, minWidth: 80 }}

  return (
    <div>     
      <FormControl sx={{ m: 1, minWidth: 125 }}>
        <InputLabel >Age Units</InputLabel>
        <Select
        //   labelId="demo-simple-select-autowidth-label"
        //   id="demo-simple-select-autowidth-label"
          value={ageUnits}
          onChange={handleChange}
          autoWidth
          label="Age"
          name="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Years"}>Years</MenuItem>
          <MenuItem value={"Months"}>Months</MenuItem>
        </Select>
      </FormControl>
      <p>You Selected: {ageUnits}</p>
    </div>
  );
}

export default DropDown;
