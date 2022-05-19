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
import { OnlinePredictionTwoTone } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { grey } from '@mui/material/colors';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: grey[800],
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const styles = {

  largeIcon: {
    width: 100,
    height: 100,
  },

};


function BasicTable({animals, onDeleteAnimal, onEditAnimal}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  console.log("Animals is")
  console.log(animals)
  console.log("onEditAnimal is ....")
  console.log(onEditAnimal)
  return (
    <TableContainer sx={{ minWidth: 800 }} component={Paper}>
      <Table stickyHeader  aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center"><Typography sx={{fontSize: {lg: 24, md: 16, sm: 12, xs: 10}}}>Picture</Typography></StyledTableCell>
            <StyledTableCell><Typography sx={{fontSize: {lg: 24, md: 16, sm: 12, xs: 10}}}>Name</Typography></StyledTableCell>
            <StyledTableCell align="center"><Typography sx={{fontSize: {lg: 24, md: 16, sm: 12, xs: 10}}}>Breed</Typography></StyledTableCell>
            <StyledTableCell align="center"><Typography sx={{fontSize: {lg: 24, md: 16, sm: 12, xs: 10}}}>Age</Typography></StyledTableCell>
            <StyledTableCell align="center"><Typography sx={{fontSize: {lg: 24, md: 16, sm: 12, xs: 10}}}>Age Units</Typography></StyledTableCell>
            <StyledTableCell align="center"><Typography sx={{fontSize: {lg: 24, md: 16, sm: 12, xs: 10}}}>Availability</Typography></StyledTableCell>
            <StyledTableCell align="center"><Typography sx={{fontSize: {lg: 24, md: 16, sm: 12, xs: 10}}}>Good With Animals?</Typography></StyledTableCell>
            <StyledTableCell align="center"><Typography sx={{fontSize: {lg: 24, md: 16, sm: 12, xs: 10}}}>Good With Children?</Typography></StyledTableCell>
            <StyledTableCell align="center"><Typography sx={{fontSize: {lg: 24, md: 16, sm: 12, xs: 10}}}>Must Be Leashed?</Typography></StyledTableCell>
            <StyledTableCell align="center"><Typography sx={{fontSize: {lg: 24, md: 16, sm: 12, xs: 10}}}>Edit Pet</Typography></StyledTableCell>
            <StyledTableCell align="center"><Typography sx={{fontSize: {lg: 24, md: 16, sm: 12, xs: 10}}}>Delete Pet</Typography></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {animals.map((row) => (
            <StyledTableRow key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="center"><Avatar props={row.image} sx={{ width: '100%', height: '100%'  }}></Avatar></TableCell>
              <TableCell component="th" scope="row"> <Typography sx={{fontSize: {lg: 24, md: 16, sm: 12, xs: 10}}}>{row.name}</Typography></TableCell>
              <TableCell align="r"><Typography sx={{fontSize: {lg: 24, md: 16, sm: 12, xs: 10}}}>{row.breed}</Typography></TableCell>
              <TableCell align="r"><Typography sx={{fontSize: {lg: 24, md: 16, sm: 12, xs: 10}}}>{row.age}</Typography></TableCell>
              <TableCell align="r"><Typography sx={{fontSize: {lg: 24, md: 16, sm: 12, xs: 10}}}>{row.age_descriptor}</Typography></TableCell>
              <TableCell align="center"><Typography sx={{fontSize: {lg: 24, md: 16, sm: 12, xs: 10}}}>{row.availability}</Typography></TableCell>
              <TableCell align="center"><Typography sx={{fontSize: {lg: 24, md: 16, sm: 12, xs: 10}}}>{row.good_with_animals === false ? 'No': row.good_with_animals === true? 'Yes': row.good_with_animals}</Typography></TableCell>
              <TableCell align="center"><Typography sx={{fontSize: {lg: 24, md: 16, sm: 12, xs: 10}}}>{row.good_with_children === false ? 'No': row.good_with_children === true? 'Yes': row.good_with_children}</Typography></TableCell>
              <TableCell align="center"><Typography sx={{fontSize: {lg: 24, md: 16, sm: 12, xs: 10}}}>{row.must_be_leashed === false ? 'No': row.must_be_leashed === true? 'Yes': row.must_be_leashed}</Typography></TableCell>
              <TableCell align="center"><IconButton aria-label="edit"><EditIcon onClick = {() => onEditAnimal(row)}/></IconButton></TableCell>
              <TableCell align="center"><IconButton aria-label="delete" ><DeleteIcon onClick = {() => onDeleteAnimal(row._id)}/></IconButton></TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;