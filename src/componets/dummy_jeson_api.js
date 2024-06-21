import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addcart, name } from "../counter/counterSlice";
import { Link } from "react-router-dom";

var cont1 = 0, preval = '', globlsearchval = '', price_after_search = true, range = ["","","","","",""];

function Dj_api() {

    const [apidata, setapidata] = useState(['']);
    const [tempapidata, settempapidata] = useState(['']);
    const [value, setvalue] = useState('');
    const [suggtion, setsuggtion] = useState([]);
    const dispecher = useDispatch();
    const storevalue = useSelector((state) => state.counter);

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(response => (setapidata(response.data.products), settempapidata(response.data.products)));
    }, [])

    console.log(tempapidata);

    function search(searchval) {
        var barndname = [];
        var categoryname = [];
        var titlename = [];
        var support_temp_api_data = [];
        var search_result = [];
        var a = 0;
        var b = 0;
        var cnt = [];
        var cntcont = 0;

        if (searchval != '') {
            for (var i = 0; i <= 29; i++) {
                if (apidata[i].brand != undefined) {
                    barndname[i] = apidata[i].brand.toLowerCase();
                    cnt[i] = 0;

                    for (var j = 0; j < searchval.length; j++) {
                        if (barndname[i][j] == searchval[j].toLowerCase()) {
                            cnt[i] = cnt[i] + 1;
                        }
                    }

                    if (barndname[i][0] == searchval[0].toLowerCase()) {

                        if (cnt[i] >= parseInt((searchval.length * 50) / 100)) {
                            support_temp_api_data[a] = apidata[i];

                            if (price_after_search) {
                                for (var j = 0; j <= 29; j++) {
                                    if (search_result[j] == barndname[i]) {
                                        var suggtionmach = true;
                                    }
                                }

                                if (suggtionmach != true) {
                                    search_result[b] = barndname[i];
                                    b++;
                                }

                                suggtionmach = false;
                            }

                            a++;
                        }
                    }
                }
            }

            for (var i = 0; i <= 29; i++) {
                categoryname[i] = apidata[i].category.toLowerCase();
                cnt[i] = 0;

                for (var j = 0; j < searchval.length; j++) {
                    if (categoryname[i][j] == searchval[j].toLowerCase()) {
                        cnt[i] = cnt[i] + 1;
                    }
                }


                if (categoryname[i][0] == searchval[0].toLowerCase()) {
                    if (cnt[i] >= parseInt((searchval.length * 70) / 100)) {

                        for (var j = 0; j <= 29; j++) {
                            if (support_temp_api_data[j] == apidata[i]) {
                                var mach = true;
                            }
                        }

                        if (mach != true) {
                            support_temp_api_data[a] = apidata[i];
                            a++;
                        }

                        if (price_after_search) {
                            for (var j = 0; j <= 29; j++) {
                                if (search_result[j] == categoryname[i]) {
                                    var suggtionmach = true;
                                }
                            }

                            if (suggtionmach != true) {
                                search_result[b] = categoryname[i];
                                b++;
                            }

                            suggtionmach = false;
                        }

                        mach = false;
                    }
                }
            }

            for (var i = 0; i <= 29; i++) {
                titlename[i] = apidata[i].title.toLowerCase();
                cnt[i] = 0;

                for (var j = 0; j < searchval.length; j++) {
                    if (titlename[i][j] == searchval[j].toLowerCase()) {
                        cnt[i] = cnt[i] + 1;
                    }
                }

                if (titlename[i][0] == searchval[0].toLowerCase()) {
                    if (cnt[i] >= parseInt((searchval.length * 70) / 100)) {
                        for (var j = 0; j <= 29; j++) {
                            if (support_temp_api_data[j] == apidata[i]) {
                                var mach = true;
                            }
                        }

                        if (mach != true) {
                            support_temp_api_data[a] = apidata[i];
                            a++;
                        }

                        if (price_after_search) {
                            for (var j = 0; j <= 29; j++) {
                                if (search_result[j] == titlename[i]) {
                                    var suggtionmach = true;
                                }
                            }

                            if (suggtionmach != true) {
                                search_result[b] = titlename[i];
                                b++;
                            }

                            suggtionmach = false;
                        }

                        mach = false;
                    }
                }
            }

            settempapidata([...support_temp_api_data]);
            setsuggtion([...search_result]);
        }
        else {
            settempapidata(apidata);
            setsuggtion([]);
        }

        globlsearchval = searchval;
        price_after_search = true;
    }

    function changecat(value_of_cat) {
        var catname = [];
        var support_temp_api_data = [];
        var a = 0;

        if (value_of_cat != 'home')
            setvalue(value_of_cat);

        for (var i = 0; i <= 29; i++) {
            catname[i] = apidata[i].category;

            if (catname[i] == value_of_cat) {
                support_temp_api_data[a] = apidata[i];
                a++;
            }
        }

        settempapidata(support_temp_api_data);

        if (value_of_cat == 'home') {
            settempapidata(apidata);
            setvalue('');
        }
    }

    function cancle() {
        setvalue('');
        search('');
    }

    function pricerange(boxval, pricerange, datainput) {

        var pricedata = [];
        var data = [];
        var barndname = [];
        var categoryname = [];
        var titlename = [];
        var a = 0;
        range[pricerange] = pricerange;

        for (var i = 0; i <= 29; i++) {
            pricedata[i] = apidata[i].price;
            categoryname[i] = apidata[i].category.toLowerCase();
            titlename[i] = apidata[i].title.toLowerCase();
        }

        if (document.getElementById("pricebox" + pricerange).checked == false) {
            range[pricerange] = "";
        }

        if((range[1] != "" || range[2] != "" || range[3] != "" || range[4] != "")) {
            if (range[1] == 1) {
                for (var i = 0; i <= 29; i++) {
                    if (categoryname[i].substr(0, globlsearchval.length) == globlsearchval.toLowerCase() && pricedata[i] >= 0 && pricedata[i] <= 99 || titlename[i].substr(0, globlsearchval.length) == globlsearchval.toLowerCase() && pricedata[i] >= 0 && pricedata[i] <= 99) {
                        data[a] = apidata[i];
                        a++;
                    }
                }
            }

            if (range[2] == 2) {
                for (var i = 0; i <= 29; i++) {
                    if (categoryname[i].substr(0, globlsearchval.length) == globlsearchval.toLowerCase() && pricedata[i] >= 100 && pricedata[i] <= 499 || titlename[i].substr(0, globlsearchval.length) == globlsearchval.toLowerCase() && pricedata[i] >= 100 && pricedata[i] <= 499) {
                        data[a] = apidata[i];
                        a++;
                    }
                }
            }

            if (range[3] == 3) {
                for (var i = 0; i <= 29; i++) {
                    if (categoryname[i].substr(0, globlsearchval.length) == globlsearchval.toLowerCase() && pricedata[i] >= 500 && pricedata[i] <= 999 || titlename[i].substr(0, globlsearchval.length) == globlsearchval.toLowerCase() && pricedata[i] >= 500 && pricedata[i] <= 999) {
                        data[a] = apidata[i];
                        a++;
                    }
                }
            }

            if (range[4] == 4) {
                for (var i = 0; i <= 29; i++) {
                    if (categoryname[i].substr(0, globlsearchval.length) == globlsearchval.toLowerCase() && pricedata[i] >= 1000 || titlename[i].substr(0, globlsearchval.length) == globlsearchval.toLowerCase() && pricedata[i] >= 1000) {
                        data[a] = apidata[i];
                        a++;
                    }
                }
            }
            settempapidata([...data]);
            preval = datainput;
        }
        else {
            price_after_search = false;
            search(value);
        }
    }

    function suggtion_opretor(suggtionname) {
        setvalue(suggtionname);
        search(suggtionname);
        setsuggtion([]);
    }

    if (apidata[0] != '') {
        return (

            <section className="flex">
                <header className="h-100">
                    <div class="con">
                        <div class="">
                            <div class="pro">
                                {
                                    localStorage.getItem("gender") == 'male' ?
                                        <a href=""
                                            style={{ backgroundImage: 'url("https://img.freepik.com/free-vector/happy-middle-age-man-face_1308-133462.jpg")', height: "100px", width: "100px", backgroundSize: "cover", borderRadius: "100%", margin: "0px auto 20px", backgroundPosition: "top" }}
                                        ></a>
                                        :
                                        <a href=""
                                            style={{ backgroundImage: 'url("https://image.lexica.art/full_jpg/dac9980d-e5ba-4eb1-8f2b-45f2bdcfbe10")', height: "100px", width: "100px", backgroundSize: "cover", borderRadius: "100%", margin: "0px auto 20px" }}>
                                        </a>
                                }
                                <a href=""><h1>hello {localStorage.getItem("name")}</h1></a>
                                <div class="like"><i class="fa-solid fa-heart"></i>50m</div>
                            </div>
                            <div class="">
                                <ul class="main">
                                    <a onClick={() => changecat('home')}>home</a>
                                    {
                                        apidata.map((v, i) => (
                                            <>
                                                {
                                                    i % 6 == 0 ? <a onClick={() => changecat(v.category)}>{v.category}</a> : ''
                                                }
                                            </>
                                        ))
                                    }
                                </ul>
                                <h2 style={{ marginTop: "40px", color: "gray" }}>filters</h2>

                                price range :
                                <br />
                                <input type="checkbox" id="pricebox1" onChange={(e) => pricerange(e.target.checked, 1, e)} /> 0$ - 99$ <br />
                                <input type="checkbox" id="pricebox2" onChange={(e) => pricerange(e.target.checked, 2, e)} /> 100$ - 499$ <br />
                                <input type="checkbox" id="pricebox3" onChange={(e) => pricerange(e.target.checked, 3, e)} /> 500$ - 999$ <br />
                                <input type="checkbox" id="pricebox4" onChange={(e) => pricerange(e.target.checked, 4, e)} /> 1000$ +
                            </div>
                        </div>
                        <div class="fot">
                            <a href=""><i class="fa-brands fa-facebook"></i></a>
                            <a href=""><i class="fa-brands fa-twitter"></i></a>
                            <a href=""><i class="fa-brands fa-instagram"></i></a>
                            <a href=""><i class="fa-brands fa-youtube"></i></a>
                            <a href=""><i class="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                </header>
                <div className="container" style={{ width: "100%" }}>
                    <div className="header_top" style={{ padding: "20px", width: "100%", position: "relative" }}>
                        <button><Link to="/cart"><h1>cart</h1></Link></button>
                        <input type="text" name="" id="searchbar" value={value} style={{ width: "1229.2px", padding: "10px 20px", fontSize: "24px" }} placeholder="type here" onChange={(e) => { search(e.target.value); setvalue(e.target.value) }} />
                        <a onClick={cancle} style={{ display: "block" }}><input type="button" value={'X'} style={{ position: "absolute", top: "53px", right: "3%", fontSize: "25px", backgroundColor: "transparent", border: "2px solid black", color: "gray" }} /></a>

                        <ul style={{ listStyle: "none", backgroundColor: "white", width: "100%", padding: "20px", position: "absolute", boxShadow: "5px 5px 10px gary", top: "100px", left: "0" }}>
                            {
                                suggtion.map((v, i) => (

                                    <>
                                        <li style={{ textTransform: "capitalize", border: "1px solid black", padding: "10px" }} onClick={() => suggtion_opretor(v)} >{v}</li>
                                    </>

                                ))
                            }
                        </ul>

                    </div>
                    <div className="con flex wrap" style={{ marginTop: "75px" }}>
                        {
                            tempapidata.map((v, i) => (
                                <>
                                    <div className="main_box">
                                        <a href={`/product/${v.id}`} style={{ textDecoration: "none", color: "black" }} target="blanck">
                                            <div className="sub_box">
                                                <img src={v.thumbnail} alt="" width={'292.85px'} height={'200px'} />
                                                <h1>title : {v.title}</h1>
                                                <h1>brand : {v.brand}</h1>
                                                <h2>category : {v.category}</h2>
                                                <h2 className="mt-5">Price {v.price}$</h2>
                                                <p>{v.description}</p>
                                            </div>
                                        </a>
                                        <button style={{ padding: "0px", margin: "10px", textTransform: "capitalize", fontWeight: "600", fontSize: "18px", border: "2px solid black", backgroundColor: "white" }}><a style={{ color: "black", textDecoration: "none", padding: "10px 20px", display: "block" }} onClick={() => dispecher(addcart(v))}>add to cart</a></button>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>
            </section>
        );
    }
    else {
        return (
            <>
                <div class="loader" style={{ margin: "0px auto", marginTop: "calc(50vh - 60px)" }}></div>
            </>
        )
    }
}

export default Dj_api;