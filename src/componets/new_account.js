import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

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

const initialValues = {
  email: '',
  password: '',
  confirmPassword: ''
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required')
});

const onSubmit = values => {
  console.log('Form data', values);
  // Handle form submission
};


const CreateAccountPage = () => {
  var match = false;
  var suggtion = [];
  const [suggation1, setsuggation1] = useState([])
  const [username , setusername] = useState();
  const [l_name , setl_name] = useState();
  const [gender , setgender] = useState();
  const [date , setdate] = useState();
  const [apidata , setapidata] = useState();
  const [avilable , setavilable] = useState();
  const [identifier_color , setidentifier_color] = useState();
  const dispecher = useDispatch();

  useEffect(() => {
      axios.get("https://dummyjson.com/users")
      .then(Response => setapidata(Response.data.users))
  },[])

  console.log(apidata);
  function check_username(currnt_username)
  {
      console.log(currnt_username);
      for(var i = 0; i <= 29 ; i++)
      {
          if(currnt_username == apidata[i].username)
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
          suggtion[0] = currnt_username+"_"+parseInt(Math.random()*10);
          suggtion[1] = currnt_username+"_"+parseInt(Math.random()*100);
          suggtion[2] = currnt_username+"_"+parseInt(Math.random()*1000);
          suggtion[3] = currnt_username+"_"+parseInt(Math.random()*10000);
          console.log(suggtion);
          setsuggation1([...suggtion]);
      }
      else
      {
          setavilable("username is avilable");
          setidentifier_color("green");
          setsuggation1([]);
      }
  }

  return (
    <Container>
      <FormWrapper>
        <Title>Create Account</Title>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <StyledForm>
            <StyledField type="text" name="username" placeholder="Username" value={username} onChange={(e) => check_username(e.target.value)} style={{marginBottom: "5px"}} />
            {
              suggation1.map((v , i) => (
                  <>
                      <li style={{textTransform: "capitalize" , border: "1px solid black", padding: "10px", listStyle: "none" , textAlign: "left"}} onClick={(e) => {setusername(e.target.innerHTML)}}>{v}</li>
                  </>
              ))
            }
            <span style={{color: identifier_color}}>{avilable}</span>
            <ErrorMessage name="username" component={ErrorText} />
            <StyledField type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component={ErrorText} />
            <StyledField type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component={ErrorText} />
            <StyledField type="password" name="confirmPassword" placeholder="Confirm Password" />
            <ErrorMessage name="confirmPassword" component={ErrorText} />
            <Button type="submit">Sign Up</Button>
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

export default CreateAccountPage;