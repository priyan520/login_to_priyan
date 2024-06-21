import { useState } from "react";

var a = 0 , b = false , foredit;

function Todo() {
  const [val, setval] = useState();
  const [data, setdata] = useState([]);
  const [newdata, setnewdata] = useState([]);

  function add1() {
    
    if (val != "" && b == false) 
    {
      setdata([...data, val]);
    }
    else if(b == true)
    {
        var temp = data;
        temp[foredit] = val;
        setdata([...temp]);
    }
    
    document.getElementById("input").value = "";
    
    setval("");

  }

  function del1(a) {
    // document.getElementById("tr"+a).style.display = "none";
    // console.log(a);
    // for( var i=0;i < data.length; i++)
    // {
    //     if(i !== a){
    //         setnewdata.push(data[i])
    //         setdata();
    //     }
    // }
    var temp = data;
    temp.splice(a,1);
    setdata([...temp]);
  }

  function edit1(a)
  {
    document.getElementById('input').value = data[a];
    b = true;

    foredit = a;
  }

  return (
    <div className="">
      <input type="text" name="" id="input" onChange={(e) => setval(e.target.value)}/>
      <input type="button" value="add" onClick={add1} onKeyDown={add1} />
      <table border={1} style={{ marginTop: "50px" }}>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
        {data.map((v, i) => (
          <tr id={"tr" + i}>
            <td>{i + 1}</td>
            <td>{v}</td>
            <td><input type="button" value={"delete"} onClick={() => del1(i)}/></td>
            <td><input type="button" value={"Edit"} onClick={() => edit1(i)}/></td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Todo;
