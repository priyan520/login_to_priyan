import { useState } from "react";

var atempt = false , num , a =0 , novalno = [] , alertprinter = '';

function Result_o()
{
        
    const obj = {
        name: '',
        sub1: '',
        sub2: '',
        sub3: '',
        sub4: '',
        sub5: '',
        sub6: '',
        sub7: '',
    }

    const [objdata , setobjdata] = useState(obj);
    const [resultdata , setresultdata] = useState([]);
    const [btnval , setbtnval] = useState('RSULT');
    const [valplaceholder , setvalplaceholder] = useState(['name' , '0' , '0' , '0', '0' , '0' , '0', '0' ]);
    const [valcolor , setvalcolor] = useState([]);
    const [grade , setgrade] = useState([]);
    const [pass , setpass] = useState('Pass');

    function entervalue(e)
    {   
      setobjdata({...objdata , [e.target.name]: e.target.value , gradeval: grade , valpass: pass});
    }

    function result()
    {
        if(atempt == false)
        {
            if(objdata.name != '' && objdata.sub1 != '' && objdata.sub2 != '' && objdata.sub3 != '' && objdata.sub4 != '' && objdata.sub5 != '' && objdata.sub6 != '' && objdata.sub7 != '')
            {
                var temp = [objdata.sub1 , objdata.sub2 , objdata.sub3 , objdata.sub4 , objdata.sub5 , objdata.sub6 , objdata.sub7];

                for(var i = 0 ; i<7 ; i++)
                {
                  if(temp[i] >= 90)
                  {
                    grade[i] = 'A+';
                  }
                  else if(temp[i] >= 80)
                  {
                    grade[i] = 'A';
                  }
                  else if(temp[i] >= 70)
                  {
                    grade[i] = 'B+';
                  }
                  else if(temp[i] >= 60)
                  {
                    grade[i] = 'B';
                  }
                  else if(temp[i] >= 50)
                  {
                    grade[i] = 'C+';
                  }
                  else if(temp[i] >= 33)
                  {
                    grade[i] = 'C';
                  }
                  else if(temp[i] < 33)
                  {
                    grade[i] = 'E';
                    setpass('Fail');
                  }
                }

                setgrade([...grade]);

                setresultdata([...resultdata , objdata]);
                setobjdata(obj);
                setvalplaceholder(['name' , '0' , '0' , '0', '0' , '0' , '0', '0' ]);
                setvalcolor(['']);
            }
            else
            {

                var temp = [objdata.name , objdata.sub1 , objdata.sub2 , objdata.sub3 , objdata.sub4 , objdata.sub5 , objdata.sub6 , objdata.sub7];

                for(var i = 0 ; i < 8 ; i++)
                {
                    if(temp[i] == '')
                    {
                        valcolor[i] = 'fild';
                        novalno[a] = i;
                        a++;
                        if(i != 0)
                        {
                            alertprinter = alertprinter + 'plsese enter value of sub'+i+'\n';
                            valplaceholder[i] = 'plsese enter val of sub'+i;
                        }
                        else
                        {
                            alertprinter = 'plese enter value of name \n';
                            valplaceholder[i] = 'plese enter value of name';
                        }
                    }
                }
                alert(alertprinter);
                setvalplaceholder([...valplaceholder]);
                setvalcolor([...valcolor]);
                console.log(document.getElementById('know').className);
            }
        }
        else if(atempt == true)
        {
            if(objdata.name != '' && objdata.sub1 != '' && objdata.sub2 != '' && objdata.sub3 != '' && objdata.sub4 != '' && objdata.sub5 != '' && objdata.sub6 != '' && objdata.sub7 != '')
                {
                    resultdata[num] = objdata;
                    setresultdata([...resultdata]);
                    atempt = false;
                    setvalplaceholder(['name' , '0' , '0' , '0', '0' , '0' , '0', '0' ]);
                    setvalcolor(['']);
                    setobjdata(obj);
                    setbtnval("RESULT")
                }
                else
                {
    
                    var temp = [objdata.name , objdata.sub1 , objdata.sub2 , objdata.sub3 , objdata.sub4 , objdata.sub5 , objdata.sub6 , objdata.sub7]
    
                    for(var i = 0 ; i < 8 ; i++)
                    {
                        if(temp[i] == '')
                        {
                            valcolor[i] = 'fild';
                            novalno[a] = i;
                            a++;
                            if(i != 0)
                            {
                                alertprinter = alertprinter + 'plsese enter value of sub'+i+'\n';
                                valplaceholder[i] = 'plsese enter val of sub'+i;
                            }
                            else
                            {
                                alertprinter = 'plese enter value of name \n';
                                valplaceholder[i] = 'plese enter value of name';
                            }
                        }
                    }
                    alert(alertprinter);
                    setvalplaceholder([...valplaceholder]);
                    setvalcolor([...valcolor]);
                    console.log(document.getElementById('know').className);
                }
        }
    }

    function del(n)
    {
        resultdata.splice(n , 1);
        setresultdata([...resultdata]);
    }

    function edit(n)
    {
        num = n;
        atempt = true;
        setobjdata(resultdata[n]);
        setbtnval('EDIT');
    }

    function hey()
    {
      
    }

    return(
        <div className="">
            Name : <input type="text" name="name"    value={objdata.name} className={valcolor[0]} placeholder={valplaceholder[0]} id="know" onChange={entervalue} /><br />
            Sub1 : <input type="number" name="sub1" value={objdata.sub1} className={valcolor[1]} placeholder={valplaceholder[1]}  id="" onChange={entervalue} /><br />
            Sub2 : <input type="number" name="sub2" value={objdata.sub2} className={valcolor[2]} placeholder={valplaceholder[2]}  id="" onChange={entervalue} /><br />
            Sub3 : <input type="number" name="sub3" value={objdata.sub3} className={valcolor[3]} placeholder={valplaceholder[3]}  id="" onChange={entervalue} /><br />
            Sub4 : <input type="number" name="sub4" value={objdata.sub4} className={valcolor[4]} placeholder={valplaceholder[4]}  id="" onChange={entervalue} /><br />
            Sub5 : <input type="number" name="sub5" value={objdata.sub5} className={valcolor[5]} placeholder={valplaceholder[5]}  id="" onChange={entervalue} /><br />
            Sub6 : <input type="number" name="sub6" value={objdata.sub6} className={valcolor[6]} placeholder={valplaceholder[6]}  id="" onChange={entervalue} /><br />
            Sub7 : <input type="number" name="sub7" value={objdata.sub7} className={valcolor[7]} placeholder={valplaceholder[7]}  id="" onChange={entervalue} /><br /><br />
            <input type="button" value={btnval} onClick={result} />
            <input type="button" value="CLICK ME" onClick={hey} />

            {
                resultdata.map((v , i) => (
                    <div class="container">
          <div class="main_div">
            <div class="h_top flex">
              <div class="logo">
                <img src={require("../assets/logo.jpg")} alt="Ashadeep3 Logo" />
              </div>
              <div class="name">
                <h3>Ashadeep Vidhyalay-3</h3>
                <p>Snehmilan society, Chikuwadi, Varachha Road, surat</p>
              </div>
              <div style={{ marginLeft: "40px" }}>
                <input type="button" value="X" onClick={() => del(i)} />
              </div>
            </div>
            <div class="h_second">
              <div class="name">
                <h5>Second Term Exam's Result - 2022-23</h5>
              </div>
            </div>
            <div class="d-1">
              <div class="color stu">
                <h5>Student's Name</h5>
              </div>
              <h5 class="one">{v.name}</h5>
            </div>
            <div class="d-2">
              <div class="dd1 color ddb">
                <h5>Std - Div</h5>
              </div>
              <div class="dd2 color ddb">
                <h5>Roll No.</h5>
              </div>
              <div class="dd3 color ddb">
                <h5>G.R. No.</h5>
              </div>
              <div class="dd4 color ddb">
                <h5>Birth Date</h5>
              </div>
            </div>
            <div class="d-3">
              <div class="ddb1 ddd1">
                <h5>11 Com - C</h5>
              </div>
              <div class="ddb1 ddd2">
                <h5>{i+1}</h5>
              </div>
              <div class="ddb1 ddd3">
                <h5>4102</h5>
              </div>
              <div class="ddb1 ddd4">
                <h5>15-12-2006</h5>
              </div>
            </div>
            <div class="d-4">
              <div class="sub1 mark color">
                <h5>Subject</h5>
              </div>
              <div class="sub2 mark color">
                <h5>Total Marks</h5>
              </div>
              <div class="sub3 mark color">
                <h5>Obtained Marks</h5>
              </div>
              <div class="sub4 mark color">
                <h5>Grade</h5>
              </div>
            </div>
            <div class="d-main">
              <div class="d-5">
                <div class="sub1 mark">GUJRATI (F.L.)</div>
                <div class="sub2 mark">ENGLISH (S.L.)</div>
                <div class="sub3 mark">ELEMENTS OF ACC.</div>
                <div class="sub4 mark">STATISTICS</div>
                <div class="sub4 mark">ECONOMICS</div>
                <div class="sub4 mark">ORG. OF COMM.</div>
                <div class="sub4 mark">SEC. PRACTICE</div>
              </div>
              <div class="d-6">
                <div class="sub4 mark">100</div>
                <div class="sub4 mark">100</div>
                <div class="sub4 mark">100</div>
                <div class="sub4 mark">100</div>
                <div class="sub4 mark">100</div>
                <div class="sub4 mark">100</div>
                <div class="sub4 mark">100</div>
              </div>
              <div class="d-7">
                <div class="sub4 mark">{v.sub1}</div>
                <div class="sub4 mark">{v.sub2}</div>
                <div class="sub4 mark">{v.sub3}</div>
                <div class="sub4 mark">{v.sub4}</div>
                <div class="sub4 mark">{v.sub5}</div>
                <div class="sub4 mark">{v.sub6}</div>
                <div class="sub4 mark">{v.sub7}</div>
              </div>
              <div class="d-10">
                <div class="sub4 mark">{v.gradeval[0]}</div>
                <div class="sub4 mark">{v.gradeval[1]}</div>
                <div class="sub4 mark">{v.gradeval[2]}</div>
                <div class="sub4 mark">{v.gradeval[3]}</div>
                <div class="sub4 mark">{v.gradeval[4]}</div>
                <div class="sub4 mark">{v.gradeval[5]}</div>
                <div class="sub4 mark">{v.gradeval[6]}</div>
              </div>
            </div>
            <div class="d-11">
              <div class="com com1 color">
                <h5>Result</h5>
              </div>
              <div class="com com2 color">
                <h5>Obtained Marks/Total Marks</h5>
              </div>
              <div class="com com3 color">
                <h5>Percentage</h5>
              </div>
              <div class="com com4 color">
                <h5>Grade</h5>
              </div>
            </div>
            <div class="d-12">
              <div class="com com1">
                <h5>{v.valpass}</h5>
              </div>
              <div class="com com2">
                <h5>{parseFloat(v.sub1)+parseFloat(v.sub2)+parseFloat(v.sub3)+parseFloat(v.sub4)+parseFloat(v.sub5)+parseFloat(v.sub6)+parseFloat(v.sub7)}/700</h5>
              </div>
              <div class="com com3">
                <h5>{(((parseFloat(v.sub1)+parseFloat(v.sub2)+parseFloat(v.sub3)+parseFloat(v.sub4)+parseFloat(v.sub5)+parseFloat(v.sub6)+parseFloat(v.sub7))*100)/700).toFixed(2)}%</h5>
              </div>
              <div class="com com4">
                <h5>A+</h5>
              </div>
            </div>
            <button onClick={() => {edit(i)}}>Edit</button>
          </div>
        </div>
                ))
            }
        </div>
    );

}

export default Result_o;