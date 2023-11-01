import {useState} from 'react'
function Profile(){
    const [loggedIn, setLoggedIn]=useState(2)
    // if(loggedIn)
    // {
    //     return(
    //         <div>
    //             <h1>Welcome Ali</h1>
    //         </div>
    //     )
    // }
    // else{
    //     return(
    //         <div>
    //             <h1>Welcome Guest</h1>
    //         </div>
    //     )
    // }


    return(
        <div>
             {loggedIn==1?
              <h1>Welcome use 1</h1>:
              loggedIn==2?<h1>Welcome user 2</h1>:
              <h1>Welcome user 3</h1>}
        </div>
      ) 
}
export default Profile;