import { useEffect, useState } from "react";
import image from "../assets/x.jpg";
import image2 from "../assets/o.jpg";

var a = 0 , stop = false , turn = true , cont2 = 0 , cont3 = false , mode = false;



function Tic_tec_toi()
{



    const [val1 , setval1] = useState(' ');
    const [val2 , setval2] = useState(' ');
    const [val3 , setval3] = useState(' ');
    const [val4 , setval4] = useState(' ');
    const [val5 , setval5] = useState(' ');
    const [val6 , setval6] = useState(' ');
    const [val7 , setval7] = useState(' ');
    const [val8 , setval8] = useState(' ');
    const [val9 , setval9] = useState(' ');
    const [img1 , setimg1] = useState('');
    const [win , setwin] = useState('click for start the match');

    // with useEffect 

    useEffect(() => {
        if(val1 == "X" && val2 == "X" && val3 == "X" ||val4 == "X" && val5 == "X" && val6 == "X" || val7 == "X" && val8 == "X" && val9 == "X" || val1 == "X" && val4 == "X" && val7 == "X" || val2 == "X" && val5 == "X" && val8 == "X" || val3 == "X" && val6 == "X" && val9 == "X" || val1 == "X" && val5 == "X" && val9 == "X" || val3 == "X" && val5 == "X" && val7 == "X")
        {
            setwin("X is win");
            document.getElementById("win").style.opacity = "1";
            stop = true;


            for(var i = 1 ; i <=9 ; i++)
            {
                if(i==1 || i==4 || i==7)
                {
                    if(document.getElementById('bt'+i).style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")' && document.getElementById('bt'+(i+1)).style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")' && document.getElementById('bt'+(i+2)).style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")')
                    {
                        document.getElementById("bt"+i).style.filter = "brightness(200%)";
                        document.getElementById("bt"+(i+1)).style.filter = "brightness(200%)";
                        document.getElementById("bt"+(i+2)).style.filter = "brightness(200%)";
                    }
                }

                if(i==1 || i==2 || i==3)
                {
                    if(document.getElementById('bt'+i).style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")' && document.getElementById('bt'+(i+3)).style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")' && document.getElementById('bt'+(i+6)).style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")')
                    {
                        document.getElementById("bt"+i).style.filter = "brightness(200%)";
                        document.getElementById("bt"+(i+3)).style.filter = "brightness(200%)";
                        document.getElementById("bt"+(i+6)).style.filter = "brightness(200%)";
                    }
                }

            }

            if(document.getElementById('bt1').style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")' && document.getElementById('bt5').style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")' && document.getElementById('bt9').style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")')
            {
                document.getElementById("bt1").style.filter = "brightness(200%)";
                document.getElementById("bt5").style.filter = "brightness(200%)";
                document.getElementById("bt9").style.filter = "brightness(200%)";
            }

            if(document.getElementById('bt3').style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")' && document.getElementById('bt5').style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")' && document.getElementById('bt7').style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")')
            {
                document.getElementById("bt3").style.filter = "brightness(200%)";
                document.getElementById("bt5").style.filter = "brightness(200%)";
                document.getElementById("bt7").style.filter = "brightness(200%)";
            }
        }
        else if(val1 == "o" && val2 == "o" && val3 == "o" ||val4 == "o" && val5 == "o" && val6 == "o" || val7 == "o" && val8 == "o" && val9 == "o" || val1 == "o" && val4 == "o" && val7 == "o" || val2 == "o" && val5 == "o" && val8 == "o" || val3 == "o" && val6 == "o" && val9 == "o" || val1 == "o" && val5 == "o" && val9 == "o" || val3 == "o" && val5 == "o" && val7 == "o")
        {
            setwin("O is win");
            document.getElementById("win").style.opacity = "1";
            stop = true;

            for(var i = 1 ; i <=9 ; i++)
            {
                if(i==1 || i==4 || i==7)
                {
                    if(document.getElementById('bt'+i).style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")' && document.getElementById('bt'+(i+1)).style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")' && document.getElementById('bt'+(i+2)).style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")')
                    {
                        document.getElementById("bt"+i).style.filter = "brightness(200%)";
                        document.getElementById("bt"+(i+1)).style.filter = "brightness(200%)";
                        document.getElementById("bt"+(i+2)).style.filter = "brightness(200%)";
                    }
                }

                if(i==1 || i==2 || i==3)
                {
                    if(document.getElementById('bt'+i).style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")' && document.getElementById('bt'+(i+3)).style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")' && document.getElementById('bt'+(i+6)).style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")')
                    {
                        document.getElementById("bt"+i).style.filter = "brightness(200%)";
                        document.getElementById("bt"+(i+3)).style.filter = "brightness(200%)";
                        document.getElementById("bt"+(i+6)).style.filter = "brightness(200%)";
                    }
                }

            }

            if(document.getElementById('bt1').style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")' && document.getElementById('bt5').style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")' && document.getElementById('bt9').style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")')
            {
                document.getElementById("bt1").style.filter = "brightness(200%)";
                document.getElementById("bt5").style.filter = "brightness(200%)";
                document.getElementById("bt9").style.filter = "brightness(200%)";
            }

            if(document.getElementById('bt3').style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")' && document.getElementById('bt5').style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")' && document.getElementById('bt7').style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")')
            {
                document.getElementById("bt3").style.filter = "brightness(200%)";
                document.getElementById("bt5").style.filter = "brightness(200%)";
                document.getElementById("bt7").style.filter = "brightness(200%)";
            }
        }
        else
        {
            if(a == 9)
            {
                setwin("No one is win");
                document.getElementById("win").style.opacity = "1";
                stop = true;
            }
            else
            {
                if(cont3 == true)
                {
                    setwin("match is running");
                    document.getElementById("win").style.opacity = "1";
                }
                else
                {
                   setwin('click for start the match'); 
                }
            }
        }
      },  [val1 , val2 , val3 , val4 , val5 , val6 , val7 , val8 , val9 , win ]);

    function ox(val)
    {

        cont3 = true;
    
        if(mode == false)
        {
            if(stop == false)
            {
                if(turn == true)
                {
                    if(a % 2 == 0 )
                    {
                        if(val == 1 && val1 == ' ')
                        {
                            document.getElementById('bt1').style.backgroundImage = "url("+image+")";
                            setval1('X');
                            a++;
                        }
                        if(val == 2 && val2 == ' ')
                        {
                            document.getElementById('bt2').style.backgroundImage = "url("+image+")";
                            setval2('X');
                            a++;
                        }
                        if(val == 3 && val3 == ' ')
                        {
                            document.getElementById('bt3').style.backgroundImage = "url("+image+")";
                            setval3('X');
                            a++;
                        }
                        if(val == 4 && val4 == ' ')
                        {
                            document.getElementById('bt4').style.backgroundImage = "url("+image+")";
                            setval4('X');
                            a++;
                        }
                        if(val == 5 && val5 == ' ')
                        {
                            document.getElementById('bt5').style.backgroundImage = "url("+image+")";
                            setval5('X');
                            a++;
                        }
                        if(val == 6 && val6 == ' ')
                        {
                            document.getElementById('bt6').style.backgroundImage = "url("+image+")";
                            setval6('X');
                            a++;
                        }
                        if(val == 7 && val7 == ' ')
                        {
                            document.getElementById('bt7').style.backgroundImage = "url("+image+")";
                            setval7('X');
                            a++;
                        }
                        if(val == 8 && val8 == ' ')
                        {
                            document.getElementById('bt8').style.backgroundImage = "url("+image+")";
                            setval8('X');
                            a++;
                        }
                        if(val == 9 && val9 == ' ')
                        {
                            document.getElementById('bt9').style.backgroundImage = "url("+image+")";
                            setval9('X');
                            a++;
                        }
                    }
                    else if(a % 2 == 1)
                    {
                        if(val == 1 && val1 == ' ')
                        {
                            document.getElementById('bt1').style.backgroundImage = "url("+image2+")";
                            setval1('o');
                            a++;
                        }
                        if(val == 2 && val2 == ' ')
                        {
                            document.getElementById('bt2').style.backgroundImage = "url("+image2+")";
                            setval2('o');
                            a++;
                        }
                        if(val == 3 && val3 == ' ')
                        {
                            document.getElementById('bt3').style.backgroundImage = "url("+image2+")";
                            setval3('o');
                            a++;
                        }
                        if(val == 4 && val4 == ' ')
                        {
                            document.getElementById('bt4').style.backgroundImage = "url("+image2+")";
                            setval4('o');
                            a++;
                        }
                        if(val == 5 && val5 == ' ')
                        {
                            document.getElementById('bt5').style.backgroundImage = "url("+image2+")";
                            setval5('o');
                            a++;
                        }
                        if(val == 6 && val6 == ' ')
                        {
                            document.getElementById('bt6').style.backgroundImage = "url("+image2+")";
                            setval6('o');
                            a++;
                        }
                        if(val == 7 && val7 == ' ')
                        {
                            document.getElementById('bt7').style.backgroundImage = "url("+image2+")";
                            setval7('o');
                            a++;
                        }
                        if(val == 8 && val8 == ' ')
                        {
                            document.getElementById('bt8').style.backgroundImage = "url("+image2+")";
                            setval8('o');
                            a++;
                        }
                        if(val == 9 && val9 == ' ')
                        {
                            document.getElementById('bt9').style.backgroundImage = "url("+image2+")";
                            setval9('o');
                            a++;
                        }
                    }
                }
                else if(turn == false)
                {
                    if(a % 2 == 1 )
                    {
                        if(val == 1 && val1 == ' ')
                        {
                            document.getElementById('bt1').style.backgroundImage = "url("+image+")";
                            setval1('X');
                            a++;
                        }
                        if(val == 2 && val2 == ' ')
                        {
                            document.getElementById('bt2').style.backgroundImage = "url("+image+")";
                            setval2('X');
                            a++;
                        }
                        if(val == 3 && val3 == ' ')
                        {
                            document.getElementById('bt3').style.backgroundImage = "url("+image+")";
                            setval3('X');
                            a++;
                        }
                        if(val == 4 && val4 == ' ')
                        {
                            document.getElementById('bt4').style.backgroundImage = "url("+image+")";
                            setval4('X');
                            a++;
                        }
                        if(val == 5 && val5 == ' ')
                        {
                            document.getElementById('bt5').style.backgroundImage = "url("+image+")";
                            setval5('X');
                            a++;
                        }
                        if(val == 6 && val6 == ' ')
                        {
                            document.getElementById('bt6').style.backgroundImage = "url("+image+")";
                            setval6('X');
                            a++;
                        }
                        if(val == 7 && val7 == ' ')
                        {
                            document.getElementById('bt7').style.backgroundImage = "url("+image+")";
                            setval7('X');
                            a++;
                        }
                        if(val == 8 && val8 == ' ')
                        {
                            document.getElementById('bt8').style.backgroundImage = "url("+image+")";
                            setval8('X');
                            a++;
                        }
                        if(val == 9 && val9 == ' ')
                        {
                            document.getElementById('bt9').style.backgroundImage = "url("+image+")";
                            setval9('X');
                            a++;
                        }
                    }
                    else if(a % 2 == 0)
                    {
                        if(val == 1 && val1 == ' ')
                        {
                            document.getElementById('bt1').style.backgroundImage = "url("+image2+")";
                            setval1('o');
                            a++;
                        }
                        if(val == 2 && val2 == ' ')
                        {
                            document.getElementById('bt2').style.backgroundImage = "url("+image2+")";
                            setval2('o');
                            a++;
                        }
                        if(val == 3 && val3 == ' ')
                        {
                            document.getElementById('bt3').style.backgroundImage = "url("+image2+")";
                            setval3('o');
                            a++;
                        }
                        if(val == 4 && val4 == ' ')
                        {
                            document.getElementById('bt4').style.backgroundImage = "url("+image2+")";
                            setval4('o');
                            a++;
                        }
                        if(val == 5 && val5 == ' ')
                        {
                            document.getElementById('bt5').style.backgroundImage = "url("+image2+")";
                            setval5('o');
                            a++;
                        }
                        if(val == 6 && val6 == ' ')
                        {
                            document.getElementById('bt6').style.backgroundImage = "url("+image2+")";
                            setval6('o');
                            a++;
                        }
                        if(val == 7 && val7 == ' ')
                        {
                            document.getElementById('bt7').style.backgroundImage = "url("+image2+")";
                            setval7('o');
                            a++;
                        }
                        if(val == 8 && val8 == ' ')
                        {
                            document.getElementById('bt8').style.backgroundImage = "url("+image2+")";
                            setval8('o');
                            a++;
                        }
                        if(val == 9 && val9 == ' ')
                        {
                            document.getElementById('bt9').style.backgroundImage = "url("+image2+")";
                            setval9('o');
                            a++;
                        }
                    }
                }
                // if(document.getElementById("bt1").style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")' && document.getElementById("bt2").style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")' && document.getElementById("bt3").style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")' ||document.getElementById("bt4").style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")' && document.getElementById("bt5").style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")' && document.getElementById("bt6").style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")' || document.getElementById("bt7").style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")' && document.getElementById("bt8").style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")' && document.getElementById("bt9").style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")' || document.getElementById("bt1").style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")' && document.getElementById("bt4").style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")' && document.getElementById("bt7").style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")' || document.getElementById("bt2").style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")' && document.getElementById("bt5").style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")' && document.getElementById("bt8").style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")' || document.getElementById("bt3").style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")' && document.getElementById("bt6").style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")' && document.getElementById("bt9").style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")' || document.getElementById("bt1").style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")' && document.getElementById("bt5").style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")' && document.getElementById("bt9").style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")' || document.getElementById("bt3").style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")' && document.getElementById("bt5").style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")' && document.getElementById("bt7").style.backgroundImage == 'url("/static/media/x.dabb08f3237d7d345591.jpg")')
                // {
                //     setwin("X");
                //     document.getElementById("win").style.opacity = "1";
                //     stop = true;
                    
                // }
                // if(document.getElementById("bt1").style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")' && document.getElementById("bt2").style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")' && document.getElementById("bt3").style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")' ||document.getElementById("bt4").style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")' && document.getElementById("bt5").style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")' && document.getElementById("bt6").style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")' || document.getElementById("bt7").style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")' && document.getElementById("bt8").style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")' && document.getElementById("bt9").style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")' || document.getElementById("bt1").style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")' && document.getElementById("bt4").style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")' && document.getElementById("bt7").style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")' || document.getElementById("bt2").style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")' && document.getElementById("bt5").style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")' && document.getElementById("bt8").style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")' || document.getElementById("bt3").style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")' && document.getElementById("bt6").style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")' && document.getElementById("bt9").style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")' || document.getElementById("bt1").style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")' && document.getElementById("bt5").style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")' && document.getElementById("bt9").style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")' || document.getElementById("bt3").style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")' && document.getElementById("bt5").style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")' && document.getElementById("bt7").style.backgroundImage == 'url("/static/media/o.67b1cb7ac84ed561b765.jpg")')
                // {
                //     setwin("O");
                //     document.getElementById("win").style.opacity = "1";
                //     stop = true;
                    
                // }
            }
            if(val == 'r')
            {
                for(var i = 1 ; i<=9 ; i++)
                {
                    document.getElementById('bt'+i).style.backgroundImage = "url('./none/blank')";
                }
                // alert(document.getElementById('bt'+1).style.backgroundImage);
                a = 0;
                setval1(' ');
                setval2(' ');
                setval3(' ');
                setval4(' ');
                setval5(' ');
                setval6(' ');
                setval7(' ');
                setval8(' ');
                setval9(' ');
                setwin(' ');

                stop = false;

                for(var i = 1 ; i <= 9 ; i++)
                {
                    document.getElementById("bt"+i).style.filter = "brightness(100%)"
                }

                cont2++;

                if(cont2 % 2 == 0)
                {
                    turn = true;
                }
                else if(cont2 % 2 == 1)
                {
                    turn = false;
                }

                cont3 = false;
            }
            if(val == "change")
            {
                mode = true;
            }
        }
        else if(mode == true)
        {
            
        }
    }

    return(
        <>
            <div className="tic">
                <h1 id="win" style={{opacity: "1"}}>{win}</h1>
                <input type="button" id="bt1"
                 value={val1}  onClick={() => ox(1)}/>
                <input type="button" id="bt2" value={val2}  onClick={() => ox(2)}/>
                <input type="button" id="bt3" value={val3}  onClick={() => ox(3)}/>
                <br />
                <input type="button" id="bt4" value={val4}  onClick={() => ox(4)}/>
                <input type="button" id="bt5" value={val5}  onClick={() => ox(5)}/>
                <input type="button" id="bt6" value={val6}  onClick={() => ox(6)}/>
                <br />
                <input type="button" id="bt7" value={val7}  onClick={() => ox(7)}/>
                <input type="button" id="bt8" value={val8}  onClick={() => ox(8)}/>
                <input type="button" id="bt9" value={val9}  onClick={() => ox(9)}/>
                <h1 id="harmin">hello</h1>
            </div>
            <button onClick={() => ox('r')}>Reset</button>
            <button onClick={() => ox('change')}>change the moad</button>
        </>
    );
}

export default Tic_tec_toi;