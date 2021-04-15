import React from 'react'

function Button1(props) {
    const handleClick= ()=>{
        console.log("I am handleClick")
        var dataToSend="[1,2,3,4]"
        props.someFunction(dataToSend)
    }

    return (
        <div>
            <center><button onClick={handleClick} style={{weight:20,height:20,padding:20,margin:40}}>Click me</button></center>
        </div>
    )
}
 
export default Button1

//in app.js
// import React from 'react'
// import Button1 from './pages/Button1'

// function Childtoparent(props) {
//   const receivedData=(data)=>{
//     console.log("data is received from parent",data)
//   }
//   return (
//    <div className="bigContainer">
//       <Button1 someFunction={receivedData} />
//    </div>
//   )
// }

// export default Childtoparent
