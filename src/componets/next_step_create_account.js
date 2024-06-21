import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


function Next_step()
{
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

    

    

    return(
        <>
            <div className="main_box" style={{border: "2px solid black" , margin: "100px auto 0px", width: "500px"}}>
                <div className="sub_box" style={{textAlign: "center", padding: "20px"}}>
                    <input type="text" name="" id="" placeholder="enter username" value={username} onChange={(e) => setusername(e.target.value)} style={{padding: "10px 20px", fontSize: "18px"}}/>
                    <br />
                    {
                        suggation1.map((v , i) => (
                            <>
                                <li style={{textTransform: "capitalize" , border: "1px solid black", padding: "10px", textAlign: "left"}}>{v}</li>
                            </>
                        ))
                    }
                    
                    <br />
                    <br />
                    <Link to={"/next"}><input type="button" value="next" style={{padding: "10px 40px" , backgroundColor: "green", fontWeight: "600", fontSize: "18px"}}/></Link>
                    <h1>emilys</h1>
                </div>
            </div>
        </>
    )
}

export default Next_step;