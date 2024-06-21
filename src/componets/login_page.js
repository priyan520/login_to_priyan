import React from 'react';
import { Container, CssBaseline, Box, Avatar, Typography, TextField, Button, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { name } from "../counter/counterSlice";
import { Link } from 'react-router-dom';

const theme = createTheme();
var cnt = 0 , pass = false;

function LoginPage() {

    const [apidata , setapidata] = useState();
    const [val1 , setval1] = useState("emilys");
    const [val2 , setval2] = useState("emilyspass");
    const [link , setlink] = useState("/");
    const [funcaller, setfuncaller] = useState()
    const dispecher = useDispatch();


    useEffect(() => {
        axios.get('https://dummyjson.com/users')
        .then(Response => setapidata(Response.data.users))
    },[])
    console.log(apidata);

    function login()
    {

        var cnt1 = false , cnt2 = false;

        for(var i = 0 ; i <= 29 ; i++)
        {
            if(apidata[i].username == val1 && apidata[i].password == val2)
            {
                alert("login scussfully");
            }
            
            if(apidata[i].username == val1)
            {
                cnt1 = true;
                if(apidata[i].password == val2)
                {
                    cnt2 = true;
                    dispecher(name([apidata[i].firstName , apidata[i].gender]));
                    localStorage.setItem("name",apidata[i].firstName);
                    localStorage.setItem("gender",apidata[i].gender);
                    // setlink("/home");
                    window.location.href='/home';
                    pass = true;
                    setfuncaller(true);
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
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              value={val1}
              onChange={(e) => setval1(e.target.value)}
              label="Username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={val2}
              onChange={(e) => setval2(e.target.value)}
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
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link to={"/new_account"} variant="body2" style={{fontStyle: "italic", color: "#1976d2", fontSize: "14px",textDecorationColor: "#1976d266", fontWeight: "100",fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif}} variant="body2"',lineHeight: "1.43",letterSpacing: "0.01071em"}}>
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

export default LoginPage;