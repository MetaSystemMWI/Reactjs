import React,{Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      // data:"ali",
      data:1,

    }
  }
apple() {
    // alert("apple");
    this.setState({data:this.state.data+1});
}

  render(){
    return(
      <div className="App">
        <h1>{this.state.data}</h1>
        <button onClick={()=>this.apple()}>Update Data</button>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
  
//     </div>
//   );
// }
export default App;


// import {useState} from 'react';
// import User from './Component/User';
// import Class from './Component/Class';
// import JSX from './Component/JSX';
  // let data = "Ali";  
  // function btn(){
  //   data = "Ahmed";
  //   alert(data);
  // }
// let data = "Ali";
//   function udpateData(){
//     data = "Ahmed";
//     alert(data);
//   }
//   console.warn("____________")
// const [data,setData] = useState(0);
// function updateData(){
//   setData(data+1);
// }
// console.warn("____________");
// {/* <h1>{data}</h1> */}

//       {/* <button onClick = { () => btn() }>Click me</button> */}
//       {/* <button  onClick = {udpateData}>Update Data</button> */}
//       {/* <button onClick ={updateData} >Update Data</button> */}

 

