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
  const navigate = useNavigate();

  function loginSubmit() {
    // need to set user type to "User" or "ShelterAdmin"
    const loginCreds = {
      // type: adminCheck,
      username: username,
      password: password
    }
    // DB Account Call
    // queries.query_accountLogin(loginCreds).then(
    //   (res) => {
    //     if (!res) {
    //       alert('Invalid Login, Please try again');
    //     }
    //     else {
    //       setIsLoggedIn(res);
    //       setIsAdmin(adminLogin);
    //       navigate("/Search");
    //     }
    //   }
    // )
    
    // New query call that doesn't need a checkbox.
    queries.query_findOne("Accounts", loginCreds).then(
      (res) => {
        if (!res.data) {
          alert("Invalid Login.\nCheck your credentials and try again.");
        }
        else {
          setIsLoggedIn(true);
          setIsAdmin(res.data.type === "ShelterAdmin");
          navigate("/Search");
        }
      }
    )
  }

  // Need to create this route.
  function navToSignUp() {
    navigate("/CreateAccount");
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
          <h2>Account Sign-In</h2>
        </Grid>
        <Grid item xs={12} >
          <TextField label="Username" onChange={(e) => setUsername(e.target.value)}></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Password" type={"password"} onChange={(e) => setPassword(e.target.value)}></TextField>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant='contained' onClick={loginSubmit} > Login </Button>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant='text' onClick={navToSignUp}> Sign Up Here </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default SignInPage;