import "../App.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";

const queries = require("../utils/queries");

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#5584AC" : "##FAFAFA",
  ...theme.typography.body2,
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

function CreateAccount() {

  const navigate = useNavigate();

  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [createAdmin, setCreateAdmin] = React.useState(false);

  const createAccountHandler = () => {
    if (password !== password2) {
      alert("Passwords do not match.\nPlease check your password and try again.");
      return
    }
    const userType = createAdmin ? "ShelterAdmin" : "User" ; 
    const newAccount = {
      "type" : userType,
      "username" : username,
      "email": email,
      "password": password,
      "first_name" : firstname,
      "last_name" : lastname
    };

    queries.query_insertOne("Accounts", newAccount).then(
      (res) => {
        if (!res.data._id) {
          alert("Unable to create account. Please try again.")
        }
        alert("Account successfully created. Please login!");
        navigate("/SignInPage");
      }
    )

  }

  return (
    <Item3>
      <Item
        display="flex"
        flex-direction="column"
        alignItems="center"
        direction="column"
      >
        <React.Fragment>
          <Typography variant="h4" gutterBottom style={{ color: "rgb(52 191 179 / 77%)" }}>
            {" "}
            <i className="fa-solid fa-paw navbar-icon" />
            Sign Up - Create an Account
            <i className="fa-solid fa-paw navbar-icon" />
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <label> First Name: </label>
              <TextField
                required
                id="firstName"
                label=""
                onChange={(e) => setFirstname(e.target.value)}
                fullWidth
                variant="filled"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <label> Last Name: </label>
              <TextField
                required
                id="lastName"
                label=""
                onChange={(e) => setLastname(e.target.value)}
                fullWidth
                variant="filled"
              />
            </Grid>
            <Grid item xs={12}>
              <label> Email: </label>
              <TextField
                required
                id="email"
                label=""
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                variant="filled"
              />
            </Grid>
            <Grid item xs={12}>
              <label> Username: </label>
              <TextField
                required
                id="username"
                label=""
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
                variant="filled"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <label> Password: </label>
              <TextField
                required
                id="password"
                type="password"
                label=""
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                variant="filled"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <label> Confirm Password: </label>
              <TextField
                required
                id="password2"
                type="password"
                label=""
                onChange={(e) => setPassword2(e.target.value)}
                fullWidth
                variant="filled"
              />
            </Grid>
            <Grid item xs={12}>
              <label> Create Admin/Shelter Account </label>
              <Checkbox checked={createAdmin} onChange={() => setCreateAdmin(!createAdmin)}/>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" onClick={createAccountHandler}>
                Create Account
              </Button>
            </Grid>
          </Grid>
        </React.Fragment>
      </Item>
    </Item3>
  );
}

export default CreateAccount;
