import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '../ImageAvatar/ImageAvatar'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';



//Sample data for testing purposes
function createData(name, Age, Breed, Availability, GoodWithAnimals, GoodWithChildren, MustBeLeashed) {
  return { name, Breed, Age, Availability, GoodWithAnimals, GoodWithChildren, MustBeLeashed};
}


//Sample date for testing purposes
const animalss = [
  createData('Otis', 'Dog', 3, "Adopted", "False", "True", "True", "True"),
  createData('Otis', 'Dog', 3, "Adopted", "False", "True", "True", "True"),
  createData('Otis', 'Dog', 3, "Adopted", "False", "True", "True", "True"),
  createData('Otis', 'Dog', 3, "Adopted", "False", "True", "True", "True")

];





function BasicTable({animals, onDelete}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><Typography sx={{fontSize: {lg: 30, md: 20, sm: 15, xs: 10}}}>Picture</Typography></TableCell>
            <TableCell><Typography sx={{fontSize: {lg: 30, md: 20, sm: 15, xs: 10}}}>Name</Typography></TableCell>
            <TableCell align="right"><Typography sx={{fontSize: {lg: 30, md: 20, sm: 15, xs: 10}}}>Breed</Typography></TableCell>
            <TableCell align="right"><Typography sx={{fontSize: {lg: 30, md: 20, sm: 15, xs: 10}}}>Age</Typography></TableCell>
            <TableCell align="right"><Typography sx={{fontSize: {lg: 30, md: 20, sm: 15, xs: 10}}}>Availability</Typography></TableCell>
            <TableCell align="right"><Typography sx={{fontSize: {lg: 30, md: 20, sm: 15, xs: 10}}}>Good With Animals?</Typography></TableCell>
            <TableCell align="right"><Typography sx={{fontSize: {lg: 30, md: 20, sm: 15, xs: 10}}}>Good With Children?</Typography></TableCell>
            <TableCell align="right"><Typography sx={{fontSize: {lg: 30, md: 20, sm: 15, xs: 10}}}>Must Be Leashed?</Typography></TableCell>
            <TableCell align="right"><Typography sx={{fontSize: {lg: 30, md: 20, sm: 15, xs: 10}}}>Edit Pet</Typography></TableCell>
            <TableCell align="right"><Typography sx={{fontSize: {lg: 30, md: 20, sm: 15, xs: 10}}}>Delete Pet</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {animalss.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="right"><Avatar sx={{ border: 5, borderRadius: '50%'}}></Avatar></TableCell>
              <TableCell component="th" scope="row"> <Typography sx={{fontSize: {lg: 30, md: 20, sm: 15, xs: 10}}}>{row.name}</Typography></TableCell>
              <TableCell align="right"><Typography sx={{fontSize: {lg: 30, md: 20, sm: 15, xs: 10}}}>{row.Age}</Typography></TableCell>
              <TableCell align="right"><Typography sx={{fontSize: {lg: 30, md: 20, sm: 15, xs: 10}}}>{row.Breed}</Typography></TableCell>
              <TableCell align="right"><Typography sx={{fontSize: {lg: 30, md: 20, sm: 15, xs: 10}}}>{row.Availability}</Typography></TableCell>
              <TableCell align="right"><Typography sx={{fontSize: {lg: 30, md: 20, sm: 15, xs: 10}}}>{row.GoodWithAnimals}</Typography></TableCell>
              <TableCell align="right"><Typography sx={{fontSize: {lg: 30, md: 20, sm: 15, xs: 10}}}>{row.GoodWithChildren}</Typography></TableCell>
              <TableCell align="right"><Typography sx={{fontSize: {lg: 30, md: 20, sm: 15, xs: 10}}}>{row.MustBeLeashed}</Typography></TableCell>
              <TableCell align="right"><EditIcon></EditIcon></TableCell>
              <TableCell align="right"><DeleteIcon onDelete={onDelete}></DeleteIcon></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;