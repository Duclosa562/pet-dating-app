
import { Card, CardContent, CardMedia } from '@mui/material';

import { Link } from 'react-router-dom';

import './SearchCard.css';

function SearchCard({entry}) {
    return (
        <Link to={`/PetProfile/${entry._id}`} state={{data: entry}} className='link' style={{textDecoration: 'none'}}>
            <Card sx={{ width: 245, background: "rgba(0, 0, 0, 0.3)", m: "20px", cursor: "pointer"}}>
                <CardMedia component="img" alt="pet pict" height="200" image={'data:image/jpg;base64,' + entry.image}/>
                <CardContent>
                    <div className="card-content">
                        <h5>{entry.name}</h5>
                        <h5>Species: {entry.breed}</h5>
                        <h5>Status: {entry.availability}</h5>
                        <h5>Date Added: {entry.date_created}</h5>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}

export default SearchCard;