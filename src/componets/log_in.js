import React from 'react';
import { Container, CssBaseline, Box, Avatar, Typography, TextField, Button, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import { Link } from 'react-router-dom';

const theme = createTheme();
var cnt = 0 , pass = false;

function Login() {
  

    const [username , setusername] = useState("");
    const [password , setpassword] = useState("");
    const [data , setdata] = useState(localStorage.getItem("data"));

    let usedata = JSON.parse(data);
    console.log(usedata);

    function login()
    {
      var cnt1 = false , cnt2 = false;

      if(usedata != null)
      {
        for(var i = 0 ; i < usedata.length ; i++)
        {
            if(usedata[i].username == username && usedata[i].password == password)
            {
                alert("login scussfully");
                window.location.href='/home';
            }
            
            if(usedata[i].username == username)
            {
                cnt1 = true;
                if(usedata[i].password == password)
                {
                    cnt2 = true;
                    pass = true;
                }
            }
        }
        if(cnt1 == false)
        {
          alert("username is not founed");
        }
        else if(cnt2 == false)
        {
          alert("password is not matched");
        }
      }
      else
      {
        alert("username is not founed")
      }
    }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              value={username}
              style={{
                textTransform: "capitalize"
              }}
              onChange={(e) => setusername(e.target.value)}
              label="Username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              fullWidth
              variant="contained"
              onClick={login}
              sx={{ mt: 3, mb: 2 }}
            >
              Log in
            </Button>
            <Grid container>
              <Grid item>
                <Link to={"/create_account"} variant="body2" style={{fontStyle: "italic", color: "#1976d2", fontSize: "14px",textDecorationColor: "#1976d266", fontWeight: "100",fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif}} variant="body2"',lineHeight: "1.43",letterSpacing: "0.01071em"}}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;