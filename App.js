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


import './App.css';
import React, {useState} from 'react'

function App(){
  const [data,setData]=useState(null)
  const [print,setPrint]=useState(false)
  function getData(val){
    console.warn(val.target.value);
    setData(val.target.value)
    setPrint(false)
  }
  return(
    <div className='App'>
    {
      print?
      <h1>{data}</h1>
      :null
    }
        
        <input type="text" onChange={getData}/>
        <button onClick={()=>setPrint(true)}>Print Data</button>
    </div>
  );
}
export default App;