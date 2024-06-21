import { useState } from "react";

function Numcounter()
{
    const [val , setval] = useState(0);

    function pluse()
    {
        if(val < 10)
        {
            setval(val + 1);
        }
    }

    function minus()
    {
        if(val > 0)
        {
            setval(val - 1);
        }
    }

    return(
        <>
           z
        </>
    );
}

export default Numcounter;