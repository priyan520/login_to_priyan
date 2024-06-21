import { useState } from "react";
import "../css_comp/styel.css";

var atempt = false, num;
function Result() {
  const [sub, setsub] = useState({});
  const [resultdata, setresultdata] = useState([]);

  function result(valsub) {
    if (atempt == false) {
      var varsum = parseFloat(valsub.m1) + parseFloat(valsub.m2);
      var varper = (varsum * 100) / 350;

      setresultdata([
        ...resultdata,
        { m1: valsub.m1, m2: valsub.m2, sum: varsum, per: varper },
      ]);

      setsub({ m1: "", m2: "" });
      // sub.mr0 = '';
      // sub.mr1 = '';
      // setsub('')
      // setsub(sub);
    } else if (atempt == true) {
      resultdata[num].m1 = sub.m1;
      resultdata[num].m2 = sub.m2;
      alert(sub.m1);
      alert(sub.m2);
      setresultdata([...resultdata]);
      atempt = false;
    }
  }

  function del1(a) {
    resultdata.splice(a, 1);
    setresultdata([...resultdata]);
  }

  function edit(n) {
    var data = resultdata[n];
    setsub({ ...data });
    // sub.mr0 = resultdata[n].m1;
    // sub.mr1 = resultdata[n].m2;
    // setsub(sub);
    console.log(data);
    atempt = true;
    num = n;
  }

  function hey() {
    console.log(sub);
  }

  return (
    <>
      sub1: <input type="number" value={sub.m1} onChange={(e) => {
          sub.m1 = e.target.value;
        }}
      />
      <br />
      sub2: <input type="number" value={sub.m2} onChange={(e) => { sub.m2 = e.target.value;}}
      />
      <br />
      <input type="button" value="Result" onClick={() => result(sub)} />
      <input type="button" value="click me" onClick={hey} />
      {resultdata.map((v, i) => (
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
                <input type="button" value="X" onClick={() => del1(i)} />
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
              <h5 class="one">Ashdeep Group Of School</h5>
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
                <h5>31</h5>
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
              </div>
              <div class="d-6">
                <div class="sub4 mark">50</div>
                <div class="sub4 mark">50</div>
              </div>
              <div class="d-7">
                <div class="sub4 mark">{v.m1}</div>
                <div class="sub4 mark">{v.m2}</div>
              </div>
              <div class="d-10">
                <div class="sub4 mark">A+</div>
                <div class="sub4 mark">A+</div>
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
                <h5>PASS</h5>
              </div>
              <div class="com com2">
                <h5>{v.sum}/350</h5>
              </div>
              <div class="com com3">
                <h5>{v.per.toFixed(2)}%</h5>
              </div>
              <div class="com com4">
                <h5>A+</h5>
              </div>
            </div>
            <button
              onClick={() => {
                edit(i);
              }}
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Result;
