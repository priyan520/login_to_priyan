import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Produtview()
{

    var {id} = useParams()
    const [data,setdata]= useState(null)
    useEffect(()=>{
            axios.get('https://dummyjson.com/products/'+id)
            .then(response=> setdata(response.data))
    },[])

    console.log(data);


    if(data!=null)
    {

        return(
            <>
                <h1>{data.brand}</h1>
                <h1>{data.category}</h1>
                <h1>{data.description}</h1>
                <h1>{data.discountPercentage}</h1>
                <h1>{data.price}</h1>
                <h1>{data.rating}</h1>
                <h1>{data.stock}</h1>
                <h1>{data.title}</h1>

            </>
        );
    }
    else
    {
        return(
            <>
                <div class="loader" style={{margin:"0px auto", marginTop: "calc(50vh - 60px)"}}></div>
            </>
        )
    }
}

export default Produtview;