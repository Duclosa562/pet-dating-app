import React from "react";

import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import SearchResults from "../components/SearchResults/SearchResults";

import "../styles/SearchPage.css";

const queries = require("../utils/queries");


function SearchPage(props) {
  const speciesOptions = ["Dog", "Cat", "Other"];

  // Search param states
  const [optBreed, setOptBreed] = React.useState();
  const [optAvail, setOptAvail] = React.useState();
  const [optGoodWithAnimals, setOptGoodWithAnimals] = React.useState();
  const [optGoodWithChildren, setOptGoodWithChildren] = React.useState();
  const [optLeashedAtAllTimes, setOptLeashedAtAllTimes] = React.useState();

  // Search result states
  const [searchResults, setSearchResults] = React.useState([]);

  // Checkbox handlers
  const handleGoodWAnimals = (event) => {
    setOptGoodWithAnimals(event.target.checked);
    console.log("optGoodWithAnimals is ", event.target.checked);

  };
  const handleGoodWChild = (event) => {
    setOptGoodWithChildren(event.target.checked);
  };
  const handleLeashAllTime = (event) => {
    setOptLeashedAtAllTimes(event.target.checked);
  };

  const buildSearchPref = () => {
      let searchPref = {};
      console.log("optBreed is ", optBreed);
      if (optBreed) {
        searchPref.breed = optBreed;
      }

      console.log("optAvail is ", optAvail);

      if (optAvail) {
        searchPref.availability = optAvail;
      }

      console.log("optGoodWithAnimals is ", optGoodWithAnimals);

      if (optGoodWithAnimals) {
        searchPref.good_with_animals = optGoodWithAnimals;
      }

      console.log("optGoodWithChildren is ", optGoodWithChildren);

      if (optGoodWithChildren) {
        searchPref.good_with_children = optGoodWithChildren;
      }

      console.log("optLeashedAtAllTimes is ", optLeashedAtAllTimes);

      if (optLeashedAtAllTimes) {
        searchPref.must_be_leashed = optLeashedAtAllTimes;
      }

      return searchPref;

  }

  const search = () => {
   

    const searchPref = buildSearchPref();
    console.log("SEARCH PREFS:", searchPref);
    queries
      .query_findMany("Animals", searchPref)
      .then((res) => setSearchResults(res.data));
  };
  const getAllPets = () => {
    queries
      .query_findMany("Animals", {})
      .then((res) => setSearchResults(res.data));
  };
  return (
    <div className="search-page">
      <Container
        className="search-container"
        maxwidth="sm"
        sx={{ p: 2, mt: 2.5 }}
      >
        <Box className="search-box" sx={{ p: 2 }}>
          <Stack
            className="searchFieldsRow1"
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              alignItems="center"
            >
              <h3>Type:</h3>
              <Autocomplete
                disablePortal
                clearOnEscape
                options={speciesOptions}
                renderInput={(params) => (
                  <TextField {...params} label="Select a Species" />
                )}
                sx={{ width: 300 }}
                onChange={(event, value) => {
                  setOptBreed(value);
                }}
              />
            </Stack>
            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              alignItems="center"
            >
              <h3>Status:</h3>
              <Autocomplete
                disablePortal
                clearOnEscape
                options={["Available", "Adopted", "Pending", "Not Available"]}
                renderInput={(params) => (
                  <TextField {...params} label="Select a Status" />
                )}
                sx={{ width: 300 }}
                onChange={(event, value) => {
                  setOptAvail(value);
                }}
              />
            </Stack>
          </Stack>
          <Stack
            className="searchFieldsRow2"
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Stack
              direction="row"
              spacing={0}
              justifyContent="center"
              alignItems="center"
            >
              <h3>Good with other animals</h3>
              <Checkbox
                checked={optGoodWithAnimals}
                onChange={handleGoodWAnimals}
              />
            </Stack>
            <Stack
              direction="row"
              spacing={0}
              justifyContent="center"
              alignItems="center"
            >
              <h3>Good with children</h3>
              <Checkbox
                checked={optGoodWithChildren}
                onChange={handleGoodWChild}
              />
            </Stack>
            <Stack
              direction="row"
              spacing={0}
              justifyContent="center"
              alignItems="center"
            >
              <h3>Animal must be leashed at all times</h3>
              <Checkbox
                checked={optLeashedAtAllTimes}
                onChange={handleLeashAllTime}
              />
            </Stack>
          </Stack>
          <Box className="search-box" sx={{ pt: 2 }}>
            <Stack
              className="searchFieldsRow3"
              direction="row"
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              {/* This button will call and console log query_findMany */}
              <Button variant="contained" onClick={search}>
                Search
              </Button>
            </Stack>
            <Stack sx={{ pt: 1}}>
              <Button fullWidth variant="text" onClick={getAllPets}>
                See All Pets
              </Button>
            </Stack>
          </Box>
        </Box>
        <SearchResults searchRes={searchResults} />
      </Container>
    </div>
  );
}

export default SearchPage;
