import "../App.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import AdoptPet_Finished from "./AdoptPet_Finished";

import { useLocation, useNavigate } from "react-router-dom";
import ImageAvatar from "../components/ImageAvatar/ImageAvatar";

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

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#5584AC" : "#5584AC",
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "5px",
}));

function AdoptPet({pet}) {

  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  console.log("data is")
  console.log(data)
  //console.log(pet)

  const submitHandler = (pet) => {
    console.log("in handler")
    console.log(data._id)
    queries.query_setAnimalToPending(data._id).then(
      (res) => {
        if (res) {
          navigate("/AdoptPet_Finished", {state: pet});
        }
        else {
          alert("Something went wrong...");
        }
      }
    )
  }


  return (
    <Item3>
      <Item
        display="flex"
        flex-direction="column"
        direction="column"
      >
        <React.Fragment>
          <Typography variant="h4" gutterBottom style={{ color: "rgb(52 191 179 / 77%)" }}>
            <i className="fa-solid fa-paw navbar-icon" />
            Adoption Form For {data.name}
            <i className="fa-solid fa-paw navbar-icon" />
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}   align = "center" justify = "center" alignItems = "center">
              <ImageAvatar image={data.image} />
            </Grid>
            <Grid item xs={12}>
              <label align='start'>Why are you a great candidate?</label>
              <TextField
                  fullWidth
                  multiline
                  rows={8}
                  required
                  id="outlined-required"
                  label="Explain in detail here."
                  variant="filled"
                  onChange={(e) => {}}
                  />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" size="large" onClick={() => {submitHandler(data)}}>Submit Application</Button>
            </Grid>
          </Grid>
        </React.Fragment>
      </Item>
    </Item3>
  );
}

export default AdoptPet;