import React, { useState , useEffect} from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch , useSelector} from 'react-redux';
import { getdata } from '../counter/counterSlice';
import { Link } from 'react-router-dom';

function Home()
{
    // const handleLogin = () => {
    //   // Perform login logic, then set authenticated to true
    //   // Redirect to home page
    //   history.push('/home');
    // };

    var locdata = localStorage.getItem("data");
    let retArray = JSON.parse(locdata);
    const dispecher = useDispatch();
    const dataofuser = useSelector((state) => state.counter);

    console.log(dataofuser);

    const [data , setdata] = useState(retArray);

    function deletedata(index)
    {
        var a = 0;
        var tempstorer = [];

        for(var i = 0 ; i < data.length ; i++)
        {
            if(i != index)
            {
                tempstorer[a] = data[i];
                a++;
            }
        }

        setdata([...tempstorer]);

        let string = JSON.stringify(tempstorer);
        localStorage.setItem("data" , string);
    }

    function edit(index)
    {
        dispecher(getdata([index , data[index].username , data[index].email , data[index].password]))
    }

    return(
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="user table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Username</TableCell>
                        <TableCell>Password</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((v  , i) => (
                        <TableRow key={v.username}>
                        <TableCell component="th" scope="row">{v.username}</TableCell>
                        <TableCell>{v.password}</TableCell>
                        <TableCell>{v.email}</TableCell>
                        <TableCell align="right">
                            <Link to={"/updat"}>  
                                <IconButton color="primary" onClick={() => edit(i)} >
                                    <EditIcon />
                                </IconButton>
                            </Link>
                            <IconButton color="secondary" onClick={() => deletedata(i)}>
                                <DeleteIcon />
                            </IconButton>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Home;