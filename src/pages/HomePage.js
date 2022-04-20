import NavBar from '../components/NavBar/NavBar';
import FormInput from '../components/FormInput/FormInputText';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
// import ResponsiveAppBar from "./components/testBar";

function HomePage() {
    return (
    <div className="Homepage">
    <NavBar/>
    <p>TEST</p>
    <Link to="/AdminCRUD"><button>Admin_CRUD</button></Link >
    <Link to="/PetProfile"><button>PetProfile</button></Link>
    <Link to="/AdminDashboard"><button>AdminDashboard</button></Link> 
    </div>
    );
}

export default HomePage