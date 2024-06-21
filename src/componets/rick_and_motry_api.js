import axios from "axios";
import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

var  a = 0;

function Rick_and_motry()
{

    const [data , setdata] = useState(['']);
    const [pagefun , setpagefun] = useState(parseInt(Math.random() * 39 + 1))
    const [status, setstatus] = useState(false);

    var afterno;
    
    useEffect(() => {
        console.log(pagefun);
            axios.get("https://rickandmortyapi.com/api/character/?page="+pagefun)
        .then(response => setdata(response.data.results), setstatus(true) );  
    },[pagefun])

    function funerror()
    {
        alert("invlid try")
    }

    console.log(data);

    if(status)
    {
        return(
                <div className="reck_and_motry">
                    <section className="header">
                        <div className="container">
                            <div className="con">
                                <div className="nav flex"  style={{marginTop: "10px" , justifyContent:"space-between", paddingRight:"40px"}}>
                                    <div className="logo1" style={{textAlign: "left"}}>
                                        <img src="https://repository-images.githubusercontent.com/120371205/b6740400-92d4-11ea-8a13-d5f6e0558e9b" alt="" height={'50px'} />
                                    </div>
                                    <div className="button">
                                        <a href="" style={{fontWeight: "600", color:"black", textDecoration:"none", marginRight:"40px", fontSize:"16px"}}>Docs</a>
                                        <a href="" style={{fontWeight: "600", color:"black", textDecoration:"none", marginRight:"40px", fontSize:"16px"}}>About</a>
                                        <button style={{backgroundColor: "transparent", border:"1px solid rgb(255, 152, 0)", borderRadius: "0.5rem"}}><a href="" style={{color:"black", textDecoration: "none",  fontSize:"16px", padding: "9px 18px", display: "block"}}>support us</a></button>
                                    </div>
                                </div> 
                                <div className="heading" style={{marginTop: "40px", marginBottom: "30px"}}>
                                    <div className="name">
                                        <h1 style={{fontSize: "101.25px",fontWeight:"700"}}>The Rick and Morty API</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </section>
                    <section className="main" style={{padding:"81px 0px", backgroundColor: "#272B33"}}>
                       <div className="contaner" style={{width:"1254px", margin:"0px  auto"}}>
                            <div className="con flex" style={{flexWrap: "wrap"}}>
                                {
                                    data.map((v,i)=>{
                                        return(
                                                i<6?
                                                <div className="main_box1" style={{margin: "13.500px", width: "calc(50% - 27px)", borderRadius: "0.5rem", overflow: "hidden"}}> 
                                                <div className="sub_box1 flex">
                                                    <div className="img12" style={{maxHeight: "220px"}}>
                                                        <img src={v.image} alt="" width={'229.2px'} height={"220px"} />
                                                    </div>
                                                    <div className="content" style={{padding: "0.75rem", backgroundColor: "#3C3E44", color: "white", width: "100%"}}>
                                                        <h2>{v.name}</h2>
                                                        <div className="div flex" style={{marginTop: "5px"}}>
                                                            
                                                            {v.status == "Alive"?<div className="round" style={{height: "9px" , width: "9px", borderRadius: "100%" , backgroundColor: "#55CC44", marginRight: "5px", marginTop: "2px"}}></div>: v.status == "Dead" ? <div className="round" style={{height: "9px" , width: "9px", borderRadius: "100%" , backgroundColor: "#D63D2E", marginRight: "5px", marginTop: "2px"}}></div>:<div className="round" style={{height: "9px" , width: "9px", borderRadius: "100%" , backgroundColor: "rgb(158, 158, 158)", marginRight: "5px", marginTop: "2px"}}></div>}
                
                                                            <span>{v.status} - {v.species}</span>
                                                        </div>
                                                        <div className="" style={{marginTop: "25px"}}>
                                                            <span style={{color: "#9E9E9E"}}>Last known location:</span>
                                                            {/* <p style={{marginTop: "5px", fontSize:"18px"}}>{v.location.name}</p> */}
                                                        </div>
                                                        <div className="" style={{marginTop: "25px"}}>
                                                            <span style={{color: "#9E9E9E"}}>First seen in:</span>
                                                            {/* <p style={{marginTop: "10px", fontSize:"18px"}}>{v.origin.name}</p> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>:''
                                        )
                                    })
                                }
                            </div>
                       </div>
                       <section className="flex" style={{justifyContent: "center", gap: "15px", marginTop: "50px"}}>
        
                        <button style={{padding: "0px"}}><a style={{textDecoration: "none", fontSize: "18px", color: "black", padding:"5px 10px", display:"block"}} onClick={pagefun > 1?() => setpagefun(pagefun - 1):funerror} ><FaChevronLeft></FaChevronLeft></a></button>
                        <button style={{padding: "0px"}}><a style={{textDecoration: "none", fontSize: "18px", color: "black", padding:"5px 10px", display:"block" , color: "green"}} onClick={() => setpagefun(pagefun)}>{pagefun}</a></button>
        
                        <button style={{padding: "0px"}}><a style={{textDecoration: "none", fontSize: "18px", color: "black", padding:"5px 10px", display:"block"}} onClick={() => setpagefun(pagefun + 1)} >{pagefun+1}</a></button>
                        <button style={{padding: "0px"}}><a style={{textDecoration: "none", fontSize: "18px", color: "black", padding:"5px 10px", display:"block"}} onClick={() => setpagefun(pagefun + 2)} >{pagefun+2}</a></button>
        
         
                        <button style={{padding: "0px"}}><a style={{textDecoration: "none", fontSize: "18px", color: "black", padding:"5px 10px", display:"block"}} onClick={() => setpagefun(pagefun + 3)} >{pagefun+3}</a></button>
        
         
                        <button style={{padding: "0px"}}><a style={{textDecoration: "none", fontSize: "18px", color: "black", padding:"5px 10px", display:"block"}} onClick={() => setpagefun(pagefun + 4)} >{pagefun+4}</a></button>
        
         
                        <button style={{padding: "0px"}}><a style={{textDecoration: "none", fontSize: "18px", color: "black", padding:"5px 10px", display:"block"}} onClick={() => setpagefun(pagefun + 5)} >{pagefun+5}</a></button>
        
         
                        <button style={{padding: "0px"}}><a style={{textDecoration: "none", fontSize: "18px", color: "black", padding:"5px 10px", display:"block"}} onClick={() => setpagefun(pagefun + 6)} >{pagefun+6}</a></button>
        
         
                        <button style={{padding: "0px"}}><a style={{textDecoration: "none", fontSize: "18px", color: "black", padding:"5px 10px", display:"block"}} onClick={() => setpagefun(pagefun + 7)} >{pagefun+7}</a></button>
        
         
                        <button style={{padding: "0px"}}><a style={{textDecoration: "none", fontSize: "18px", color: "black", padding:"5px 10px", display:"block"}} onClick={() => setpagefun(pagefun + 8)} >{pagefun+8}</a></button>
        
         
                        <button style={{padding: "0px"}}><a style={{textDecoration: "none", fontSize: "18px", color: "black", padding:"5px 10px", display:"block"}} onClick={() => setpagefun(pagefun + 9)} >{pagefun+9}</a></button>
        
         
                        <button style={{padding: "0px"}}><a style={{textDecoration: "none", fontSize: "18px", color: "black", padding:"5px 10px", display:"block"}} onClick={() => setpagefun(pagefun + 1)} ><FaChevronRight></FaChevronRight></a></button>
        
                       </section>
                    </section>
                </div>
            )
    }
    else
    {
        return(
            <h1>Loding page....</h1>
        )
    }
   
}

export default Rick_and_motry;