import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

import {
  Grid,
  TextField,
  Button,
  Paper,
  Container,
  styled,
  Stack,
} from "@mui/material";

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

function SignInPage({ setIsLoggedIn, setIsAdmin, setAccountData, loginCheck }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  function loginSubmit() {
    const loginCreds = {
      username: username,
      password: password,
    };
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

    // New query call that doesn't need a checkbox.
    queries.query_findOne("Accounts", loginCreds).then((res) => {
      if (!res.data) {
        alert("Invalid Login.\nCheck your credentials and try again.");
      } else {
        const cookies = new Cookies();
        cookies.set("isLoggedIn", true);
        cookies.set("isAdmin", res.data.type === "ShelterAdmin");
        cookies.set("accountData", res.data);
        cookies.set("accountType", res.data.type);
        // setIsLoggedIn(true);
        // setIsAdmin(res.data.type === "ShelterAdmin");
        // setAccountData(res.data)
        
        navigate("/Search");
        console.log("AccountData is: ", res.data)
      }
    });
  }

  // Need to create this route.
  function navToSignUp() {
    navigate("/CreateAccount");
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
              <TextField
                label="Username"
                size='medium'
                onChange={(e) => setUsername(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type={"password"}
                onChange={(e) => setPassword(e.target.value)}
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