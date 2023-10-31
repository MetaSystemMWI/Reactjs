// import React, {useState} from 'react';
// import './App.css';
// import Students from './Component/Students';

// function App(){
//   const [name,setName]=useState("Ahmed")
//   return(
//     <div className="App">
//       <h1>Props</h1>
//       <Students name={"Ali"} email="shafaullah45@gmail.com" />
//       <button onClick={()=>{setName("Ali")}}>Update Name</button>
//     </div>
//   );
// }
// export default  App;


// import './App.css';
// import React, {useState} from 'react'

// function App(){
//   const [data,setData]=useState(null)
//   const [print,setPrint]=useState(false)
//   function getData(val){
//     console.warn(val.target.value);
//     setData(val.target.value)
//     setPrint(false)
//   }
//   return(
//     <div className='App'>
//     {
//       print?
//       <h1>{data}</h1>
//       :null
//     }
        
//         <input type="text" onChange={getData}/>
//         <button onClick={()=>setPrint(true)}>Print Data</button>
//     </div>
//   );
// }
// export default App;


// import './App.css';
// import React from 'react'
// function App(){
//   const [status, setStatus]=React.useState(true)
//   return(
//     <div className='App'>
//     {
//       status? <h1>Hello World</h1>:null
//     }
//     {/* <button onClick={()=>setStatus(false)}>Hide</button>
//     <button onClick={()=>setStatus(true)}>Show</button> */}

//     <button onClick={()=>setStatus(!status)}>Toogle</button>
//     </div>
//   );
// }
// export default App;



import './App.css';
import {useState} from 'react'
function App(){
  const [name, setName]=useState("");
  const [tnc, setTnc]=useState(false);
  const [instrest, setIntrest]=useState("");
  function getFormData(e){
    console.warn(name,tnc,instrest);
    e.preventDefault();
  }
  return(
    <div className='App'>
      <h1>Handling Form</h1>
      <form onSubmit={getFormData}>
        <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)} /><br /><br />
        <select onChange={(e)=>setIntrest(e.target.value)}>
          <option value="">Selects Options</option>
          <option value="">DEO</option>
          <option value="">CEO</option>
        </select><br /><br />
        <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span>Accept Terms and Conditions</span><br /><br />
        <button type="submit">Submit</button>
        <button>Clear</button>
      </form>
      
    </div>
  );
}
export default App;