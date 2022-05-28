import React from "react";
import { useNavigate } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";

import {
  Grid,
  TextField,
  Button,
  Paper,
  Container,
  styled,
  Stack,
} from "@mui/material";

import { useCookies } from 'react-cookie';
import { ArrowDropDown } from "@mui/icons-material";

const queries = require("../utils/queries");

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#5584AC" : "##FAFAFA",
  ...theme.typography.body2,
  margin: "10px",
  padding: theme.spacing(5),
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  width: "75%",
  color: theme.palette.text.secondary,
}));

const Item3 = styled(Container)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(12),
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.text.secondary,
}));

function SignInPage({ setIsLoggedIn, setIsAdmin, setAccountData }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userType, setUserType] = React.useState("");
  const [cookies, setCookies] = useCookies(['isLoggedIn', 'isAdmin', 'userData']);

  const navigate = useNavigate();

  function loginSubmit() {
    const loginCreds = {
      type: userType,
      username: username,
      password: password,
    };
    console.log('sending login creds');
    console.log(loginCreds);
    // OLD --  DB Account Call
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

    if (userType == '' || username == '' || password == '') {
      alert("Invalid Login.\nCheck your credentials and try again.");
      console.log('empty credential(s)');
      return;
    }

    // New query call that doesn't need a checkbox.
    queries.query_findOne('Accounts', loginCreds).then((res) => {
      console.log('db response for login creds');
      console.log(res);
      if (!res.data) {
        alert("Invalid Login.\nCheck your credentials and try again.");
      } else {
        setIsLoggedIn(true);
        setIsAdmin(res.data.type === "ShelterAdmin");
        setAccountData(res.data)

        setCookies('isLoggedIn', true, { path: "/" });
        setCookies('isAdmin', res.data.type === "ShelterAdmin", { path: "/" });
        setCookies('userData', res.data, { path: "/" });
        // eslint-disable-next-line react-hooks/exhaustive-deps


        navigate("/Dashboard", {state: res.data, replace: true});
      }
    });
  }

  // Need to create this route.
  function navToSignUp() {
    navigate("/CreateAccount");
  }

  // 
  const handleKeySubmit = (event) => {
    if (event.key === 'Enter') {
      loginSubmit();
    }
  }

  return (
    <div>
      <Stack alignItems={"center"}>
        <Paper
          elevation={2}
          sx={{ mt: 4, width: "55%", verticalAlign: "middle" }}
        >
          <Grid
            container
            spacing={3}
            direction={"column"}
            justify={"center"}
            alignItems={"center"}
            sx={{ mt: 2, pb: 3 }}
          >
            <Grid item xs={12}>
              <h2>
                <i className="fa-solid fa-paw navbar-icon" />
                Account Sign-In
                <i className="fa-solid fa-paw navbar-icon" />
              </h2>
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                disablePortal
                clearOnEscape
                options={["User", "ShelterAdmin"]}
                renderInput={(params) => (
                  <TextField {...params} label="User Type"/>
                )}
                sx={{ width: 225 }}
                onChange={(event, value) => {
                  setUserType(value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Username"
                size='medium'
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={handleKeySubmit}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type={"password"}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeySubmit}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant="contained" onClick={loginSubmit}>
                {" "}
                Login{" "}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant="text" onClick={navToSignUp}>
                {" "}
                Sign Up Here{" "}
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Stack>
    </div>
  );
}

export default SignInPage;
