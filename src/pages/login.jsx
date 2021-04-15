import React from 'react';
import './style.css';

function Login() {
  return (
    <div className="bigContainer">
      <div className="smallContainer">
        <h1><center>sign in</center></h1>
        <label id="label">Username</label>
        <input placeholder="username" id="inputu"/><br></br><br></br>
        <label id="label">Password</label>
        <input placeholder="password" id="inputp"/><br></br>
        <center><button id="button">Submit</button><br></br></center>
      </div>
    </div>
  )
}

export default Login


// css
.bigContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    padding:40px
}

.smallContainer{
    color: black;
    background-color: #ede7f6;
    padding:40px
}

#button{
    background-color: #ce93d8;
    color: black;
    font-weight: bold;
    border-radius: 10px;
    width: 70px;
    height:  30px;
    margin: 20px;
}

#inputu{
    width: 200px;
    height: 28px;
    margin-left: 8px;
}

#inputp{
    width: 200px;
    height: 28px;
    margin-left: 14px;

}


#label{
    font-weight: bold;
}
