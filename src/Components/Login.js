import React, { useState } from "react";
import { Grid, Paper, Avatar, Button, TextField } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      password
        .split("")
        .map(Number)
        .reduce((a, b) => a + b) === 10
    ) {
      navigate("/home");
      setEmail("");
      setPassword("");
    } else {
      setError(true);
    }

  }
  return (
    <>
      <Grid style={{ marginTop: "6rem" }}>
        <ValidatorForm useref="form" onSubmit={submitHandler}>
          <Paper
            elevation={10}
            style={{
              padding: 20,
              height: "50vh",
              width: 280,
              margin: "20px auto",
            }}
          >
            <Grid align="center">
              <Avatar style={{ backgroundColor: "#1bbd7e" }}>
                <LockOutlinedIcon />
              </Avatar>
              <h2>Login</h2>
            </Grid>
            <TextValidator
              label="Email"
              onChange={emailChangeHandler}
              name="email"
              value={email}
              validators={["required", "isEmail"]}
              errorMessages={["This field is required", "email is not valid"]}
              fullWidth
              style={{ marginBottom: "1rem" }}
            />
            <TextField
              label="Password"
              onChange={passwordChangeHandler}
              name="password"
              type="number"
              value={password}
              error={error}
              helperText = {error && "Invalid Password Combination"}
              fullWidth
              required
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={{ marginTop: "2rem" }}
              fullWidth
            >
              Login
            </Button>
          </Paper>
        </ValidatorForm> 
      </Grid> 
    </>
  );
};


export default LoginPage;




