import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import FormsComponents from '../FormInput/FormsComponents';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// import './ProfileCard.css';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#5584AC' : '#22577E',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


function AdminCrudCard() {
    return (
        <div>

            <Card >
                <CardHeader title='CreateData'/>
                <CardContent classes='pet-content'  direction="column" alignItems="center" justifyContent="center"> 
                    <Item><FormsComponents/></Item>
                </CardContent>
                <CardActions  direction="column" style={{justifyContent: 'center'}}>
                    <Button variant='contained'>Submit</Button>
                </CardActions>
            </Card>

        </div>
    )
}

export default AdminCrudCard;