import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { additem, minusitem, removeitem } from "../counter/counterSlice";

function Cart()
{
    const value = useSelector((state) => state.counter.value);
    const dispcher = useDispatch();
    // const [total , settotal] = useState(0);
    var total = 0;

    

    for(var i = 0 ; i < value.length ; i++)
    {
        total = total + value[i].qntprice;
    }

    return(
        <>
            {
                value.map((v , i) => {
                    return(
                        <>
                            <div className="main_box">
                                <a href={`/product/${v.id}`} style={{textDecoration: "none" , color: "black"}} target="blanck">
                                    <div className="sub_box">
                                        <img src={v.thumbnail} alt="" width={'292.85px'} height={'200px'} />
                                        <h1>title : {v.title}</h1>
                                        <h1>brand : {v.brand}</h1>
                                        <h2>category : {v.category}</h2>
                                        <h2 className="mt-5">Price {v.price}$</h2>
                                        <p>{v.description}</p>
                                    </div>
                                </a>
                                <div className="" style={{display: "flex"}}>
                                    <button onClick={() => dispcher(additem(i))}>up</button>
                                    <h1>{v.qnt}</h1>
                                    <button onClick={() => dispcher(minusitem(i))}>down</button>
                                </div>
                                <button onClick={() => dispcher(removeitem(v))}>Remove From Cart</button>
                                <h1>total {v.qntprice}</h1>
                            </div>
                        </>
                    );
                })
            }
            <br />
            <br />
            <br />
            <br />
            <h1 style={{fontSize: "30px"}}>total = {total}</h1>
        </>
    );
}

export default Cart;