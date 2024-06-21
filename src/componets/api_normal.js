import { useEffect, useState } from "react";
import axios from 'axios';

function Api()
{

    const [data , setdata] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => setdata(response.data));
    })

    console.log(data);

    return(
        <>
            <table width={'100%'} border={1} > 
                <tr>
                    <th>UID</th>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>BODY</th>
                </tr>
                {
                    data.map((v , i) => (
                        <>
                        <tr>
                            <td>{v.userId}</td>
                            <td>{v.id}</td>
                            <td>{v.title}</td>
                            <td>{v.body}</td>
                        </tr>
                        </>
                    ))
                }
            </table>
        </>
    );
}

export default Api;