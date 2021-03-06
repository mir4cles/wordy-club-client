import React, { useState } from "react";

import { useDispatch } from "react-redux";

import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { fetchResults } from "../../store/results/actions";
import SayButton from "react-say/lib/SayButton";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
}));

export default function SearchBar() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState("");
  const history = useHistory();

  function submitForm(event) {
    event.preventDefault();
    dispatch(fetchResults(searchInput));
    history.push(`/search/${searchInput}`);
  }

  return (
    <div style={{ width: 300 }}>
      <form className={classes.form} noValidate>
        <TextField
          fullWidth
          id="search-bar"
          variant="outlined"
          label="Search"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={submitForm}
        >
          Go
        </Button>
        <SayButton onClick={(event) => console.log(event)} speak={searchInput}>
          Listen to Search Word
        </SayButton>
      </form>
    </div>
  );
}
