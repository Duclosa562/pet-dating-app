import React from "react";
import {
  Grid,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";

const queries = require('../utils/queries');

function SignInPage({setIsLoggedIn, setIsAdmin}) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [adminLogin, setAdminLogin] = React.useState(false);
  
  function loginSubmit() {
    console.log(username);
    console.log(password);
    console.log(adminLogin);
    const adminCheck = adminLogin ? 'ShelterAdmin' : 'User';
    const loginCreds = {
      type: adminCheck,
      username: username,
      password: password
    }
    queries.query_accountLogin(loginCreds).then(
      (res) => {
        console.log("Hello", res)
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