import { useState } from "react";
import "../css_comp/calc.css";

var repequl = false;

function Calc()
{

    localStorage.setItem("username" , "Priyan");
    localStorage.setItem("email" , "priyanbabariya900@gmail.com");
    localStorage.setItem("password" , "Priyan520");


    const [val , setval] = useState('');
    const [fval , setfval] = useState();
    const [lval , setlval] = useState();
    const [sign , setsign] = useState();
    const [place , setplace] = useState(0);

    function calc(e)
    {
        if(e != '=' && repequl == false)
        {
            setval(val + e);
        }
        else if(e != '=' && e != 'b')
        {
            setval(e);
            setfval('');
            setlval('');
            setsign('');
            repequl = false;
        }

        if(val > 9999999999)
        {
            document.getElementById('val').style.fontSize = '20px';
        }

        if(e == "+" || e == '-' || e =='/' || e == 'x' )
        {
            setsign(e);
            if(val != '')
            {
                setfval(parseFloat(val));
            }
            setval('');
            setplace(e);
        }


        if(e == '=' && repequl == false)
        {
            if(val != '')
            {
                setlval(parseFloat(val));
            }
            else
            {
                setlval(parseFloat(fval));
            }

            if(val != '')
            {
                if(sign == '+')
                {
                    setval(fval + parseFloat(val));
                }
                if(sign == '-')
                {
                    setval(fval - parseFloat(val));
                }
                if(sign == 'x')
                {
                    setval(fval * parseFloat(val));
                }
                if(sign == '/')
                {
                    setval(fval / parseFloat(val));
                }
            }
            else
            {
                if(sign == '+')
                {
                    setval(fval + fval);
                }
                if(sign == '-')
                {
                    setval(fval - fval);
                }
                if(sign == 'x')
                {
                    setval(fval * fval);
                }
                if(sign == '/')
                {
                    setval(fval / fval);
                }
            }
            setval(val.toString());
            repequl = true;
        }

        else if(e == '=' && repequl == true)
        {
            if(sign == '+')
            {
                setval(parseFloat(val) + lval);
            }
            if(sign == '-')
            {
                setval(parseFloat(val) - lval);
            }
            if(sign == 'x')
            {
                setval(parseFloat(val) * lval);
            }
            if(sign == '/')
            {
                setval(parseFloat(val) / lval);
            }    
            setval(val.toString());
        }
        
        
        if(e == "AC")
        {
            setval('');
            setplace(0);
        }

        if(e == 'b')
        {
            setval(val.slice(0,val.length - 1));
        }

        if(e == '%')
        {
            var per = (fval*parseFloat(val))/100;
            if(sign == 'x')
            {
                setval(per+'%');
            }
            if(sign == '+')
            {
                setval(fval + per);
            }
            if(sign == '-')
            {
                setval(fval - per);

            }
            setval(val.toString());
        }
    }

    function spminus(e)
    {
        setval(e + val);
    }

    return(
        <>
            <div className="calc">
                <input type="text" value={val} id="val" placeholder={place} readOnly />
                <div>
                    <input type="button" value={7} onClick={(e) => calc(e.target.value)} />
                    <input type="button" value={8} onClick={(e) => calc(e.target.value)} />
                    <input type="button" value={9} onClick={(e) => calc(e.target.value)} />
                    <input type="button" value={"AC"} onClick={(e) => calc(e.target.value)} />
                    <input type="button" value={4} onClick={(e) => calc(e.target.value)} />
                    <input type="button" value={5} onClick={(e) => calc(e.target.value)} />
                    <input type="button" value={6} onClick={(e) => calc(e.target.value)} />
                    <input type="button" value={"+"} onClick={(e) => calc(e.target.value)} />
                    <input type="button" value={1} onClick={(e) => calc(e.target.value)} />
                    <input type="button" value={2} onClick={(e) => calc(e.target.value)} />
                    <input type="button" value={3} onClick={(e) => calc(e.target.value)} />
                    <input type="button" value={"-"} onClick={(e) => calc(e.target.value)} />
                    <input type="button" value={"."} onClick={(e) => calc(e.target.value)} />   
                    <input type="button" value={0} onClick={(e) => calc(e.target.value)} />
                    <input type="button" value={"/"} onClick={(e) => calc(e.target.value)} />
                    <input type="button" value={"b"} onClick={(e) => calc(e.target.value)} />
                    <input type="button" value={"+/-"} onClick={(e) => spminus("-")} />
                    <input type="button" value={"x"} onClick={(e) => calc(e.target.value)} />
                    <input type="button" value={"%"} onClick={(e) => calc(e.target.value)} />
                    <input type="button" value={"="} onClick={(e) => calc(e.target.value)} />
                </div>
            </div>
        </>
    )
}

export default Calc;