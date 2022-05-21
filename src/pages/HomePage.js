import NavBar from '../components/NavBar/NavBar';
import FormInput from '../components/FormInput/FormInputText';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
// import ResponsiveAppBar from "./components/testBar";

function HomePage() {
    return (
    <div className="Homepage">
      <p>TEST</p>
      <Link to="/AdminCRUD"><button>Admin_CRUD</button></Link >
      <Link to="/PetProfile"><button>PetProfile</button></Link>
      <Link to="/Search"><button>Search</button></Link>
      <Link to="/AdminDashboard"><button>AdminDashboard</button></Link> 
      <Link to="/AdminCreateAcc"><button>AdminCreateAccount</button></Link> 
      <Link to="/UserCreateAcc"><button>UserCreateAccount</button></Link> 
      <Link to="/LandingPage"><button>LandingPage</button></Link> 
      <Link to="/UserDashboard"><button>UserDashboard</button></Link> 
    </div>
    );
}

export default HomePage