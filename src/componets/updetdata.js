import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getdata } from '../counter/counterSlice';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const FormWrapper = styled.div`
  background: #ffffff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #333333;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledField = styled(Field)`
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #cccccc;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 12px;
`;

const Button = styled.button`
  padding: 10px;
  margin-top: 20px;
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const Updat = () => {


  const dataofuser = useSelector((state) => state.counter);
  var data = localStorage.getItem("data");
  let usedata = JSON.parse(data);

  const [suggation1, setsuggation1] = useState([])
  const [username , setusername] = useState(dataofuser.username);
  const [email , setemail] = useState(dataofuser.email);
  const [password , setpassword] = useState(dataofuser.password);
  const [confpassword , setconfpassword] = useState(dataofuser.password);
  const [avilable , setavilable] = useState();
  const [identifier_color , setidentifier_color] = useState();
  const [checher , setchecher] = useState(true);
  const dispcher = useDispatch();


  console.log(dataofuser);

  var suggtion = [];
  var data = [];
  var match = false;
  var count = 0;
  
  var locdata = localStorage.getItem("data");
  let retArray = JSON.parse(locdata);
  
  function matcher(name)
  {
      if(username != dataofuser.username)
      {
        if(retArray != null)
          {
            for(var i = 0; i < retArray.length ; i++)
            {
              if(name == retArray[i].username)
              {
                  match = true;
                  break;
              }
              else
              {
                  match = false;
              }
            }
            if(match == true)
            {
              setavilable("username is not avilable");
              setidentifier_color("red");
              suggtion[0] = name+"_"+parseInt(Math.random()*10);
              suggtion[1] = name+"_"+parseInt(Math.random()*100);
              suggtion[2] = name+"_"+parseInt(Math.random()*1000);
              suggtion[3] = name+"_"+parseInt(Math.random()*10000);
              console.log(suggtion);
              setsuggation1([...suggtion]);
              setchecher(false);
            }
            else
            {
              setavilable("username is avilable");
              setidentifier_color("green");
              setsuggation1([]);
              setchecher(true);
            }
        }
      }
      else
      {
        setavilable("username is avilable");
        setidentifier_color("green");
        setsuggation1([]);
        setchecher(true);
      }
  }

  function create_ac()
  {
    if(checher == true || retArray == null)
    {
      if(email != undefined)
      {
        if(password != undefined)
        {
          if(password == confpassword)
          {   
            dispcher(getdata(dataofuser.index , username , email , password))
            usedata[dataofuser.index].username = username;
            usedata[dataofuser.index].email = email;
            usedata[dataofuser.index].password = password;

            let string = JSON.stringify(usedata);
            localStorage.setItem("data" , string);

            window.location.href='/home';
          }
          else
          {
            alert("Password does not matched")
          }
        }
        else
        {
          alert("enter password");
        }
      }
      else
      {
        alert("enter valid email");
      }
    }
    else
    {
      alert("choose unathor username");
    }
  }

  return (
    <Container>
      <FormWrapper>
        <Title>Create Account</Title>
        <Formik
        >
          <StyledForm>
            
            <StyledField type="text" placeholder="New Username" value={username} onChange={(e) => {setusername(e.target.value);matcher(e.target.value)}} />
            {
              suggation1.map((v , i) => (
                  <>
                      <li style={{border: "1px solid black", padding: "10px", listStyle: "none" , textAlign: "left"}} onClick={(e) => {setusername(e.target.innerHTML)}}>{v}</li>
                  </>
              ))
            }
            <span style={{color: identifier_color}}>{avilable}</span>

            <StyledField type="email" placeholder="New Email" value={email} onChange={(e) => setemail(e.target.value)}/>
            <StyledField type="password" placeholder="New Password" value={password} onChange={(e) => setpassword(e.target.value)} />
            <StyledField type="password" placeholder="Confirm Password" value={confpassword} onChange={(e) => setconfpassword(e.target.value)} />

            <Link><Button type="submit" onClick={create_ac}>Change</Button></Link>

            <Grid container style={{marginTop: "16px", textAlign: "left"}}>
              <Grid item xs>
                <Link to={"/"} style={{fontStyle: "italic", color: "#1976d2", fontSize: "14px",textDecorationColor: "#1976d266", fontWeight: "100",fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif}} variant="body2"',lineHeight: "1.43",letterSpacing: "0.01071em"}}>
                  already have an account? Log In
                </Link>
              </Grid>
            </Grid>
          </StyledForm>
        </Formik>
      </FormWrapper>
    </Container>
  );
};

export default Updat;