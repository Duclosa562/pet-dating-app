import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Grid,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";


const queries = require('../utils/queries');

function SignInPage({setIsLoggedIn, setIsAdmin, loginCheck}) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [adminLogin, setAdminLogin] = React.useState(false);
  const navigate = useNavigate();

  function loginSubmit() {
    // need to set user type to "User" or "ShelterAdmin"
    const adminCheck = adminLogin ? 'ShelterAdmin' : 'User';
    const loginCreds = {
      type: adminCheck,
      username: username,
      password: password
    }
    // DB Account Call
    queries.query_accountLogin(loginCreds).then(
      (res) => {
        if (!res) {
          alert('Invalid Login, Please try again');
        }
        else {
          setIsLoggedIn(res);
          setIsAdmin(adminLogin);
          navigate("/Search");
        }
      }
    )

  }

  return (
    <div>
      <Grid
        container
        spacing={3}
        direction={"column"}
        justify={"center"}
        alignItems={"center"}
        sx={{mt: 2}}
      >
        <Grid item xs={12}>
          <h2>User/Admin Login</h2>
        </Grid>
        <Grid item xs={12} >
          <TextField label="Username" onChange={(e) => setUsername(e.target.value)}></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Password" type={"password"} onChange={(e) => setPassword(e.target.value)}></TextField>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={adminLogin}
                onChange={() => setAdminLogin(!adminLogin)}
                label={"Admin Login"}
              />
            }
            label="Admin Login"
          />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant='contained' onClick={loginSubmit} > Login </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default SignInPage;