import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import './ProfileCard.css';
import AdoptPet from '../../pages/AdoptPet';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';


function bools_to_strings(val) {
    return val ? 'Yes' : 'No'
}

function button_html(pet) {

    if (pet.availability != 'Available') {
        return (<Button variant='contained' disabled>ADOPT</Button>);
    }
    return (
        <Link to={`/AdoptPet/${pet._id}`} state={pet}>
            <Button variant='contained'>ADOPT</Button>
        </Link>
    );
}

function ProfileCard({petData}) {

    
    var petInfo = petData.data;
    // bools_to_strings(petInfo);
    const button = button_html(petInfo);
    return (
        <div className='profile-card'>
            <Card sx={{width: 400, background: "rgba(255, 255, 255, 1.0)", m: "20px"}}>
                <CardHeader title={petInfo.name} subheader={petInfo.breed} />
                <CardContent classes='pet-content'> 
                    <div className='card-content'>
                        <p><b>Age: </b>{petInfo.age} {petInfo.age_descriptor}</p> 
                        <p><b>Date Added: </b>{petInfo.date_created}</p>
                        <p><b>Good with animals: </b>{bools_to_strings(petInfo.good_with_animals)}</p>
                        <p><b>Good with Children: </b>{bools_to_strings(petInfo.good_with_children)}</p>
                        <p><b>Must be leashed: </b>{bools_to_strings(petInfo.must_be_leashed)}</p>
                        <p><b>Description: </b>{petInfo.description}</p><br></br>
                        <p><b>Status: </b>{petInfo.availability}</p>
                    </div>
                </CardContent>
                <CardActions>
                    {button}
                </CardActions>
            </Card>
        </div>
    )
}

export default ProfileCard;