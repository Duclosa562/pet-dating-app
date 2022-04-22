
import { Card, CardContent, CardMedia } from '@mui/material';

import { Link } from 'react-router-dom';

import './SearchCard.css';

function SearchCard() {
    return (
        <Link to={'/PetProfile'} className='link' style={{textDecoration: 'none'}}>
            <Card sx={{ width: 245, background: "rgba(0, 0, 0, 0.3)", m: "20px", cursor: "pointer"}}>
                <CardMedia component="img" alt="pet pict" height="200" image={require("../../images/fuecoco.png")} />
                <CardContent>
                    <div className="card-content">
                        <h5>Pet Name</h5>
                        <h5>Pet Type</h5>
                        <h5>Pet Status</h5>
                        <h5>Pet Added Date</h5>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}

export default SearchCard;