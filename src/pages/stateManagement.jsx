//state management we use reactHooks
import React,{useState} from 'react'

function UseState(props) {
  var initialValue = 0;
  const [variable,changeVariable] = useState(initialValue);
 
  const handleClick = ()=>{
    changeVariable(variable+1);
  }

  return (
    <div>
    <h1>Counter Value: {variable}</h1>
    <button onClick={handleClick}>Increment Counter</button>
    </div>
  )
}
export default UseState


//my
import React,{useState} from 'react'

function App(props) {
  var initialValue=0;
  const [variable,ChangeVariable] = useState(initialValue)
  const handleClick = ()=>{
     ChangeVariable(variable+1)
  }

  return (
   <div>
       <center><h1>Counter Value: {variable}</h1>
       <button onClick={handleClick} style={{weight:20,height:30,fontWeight:'bold',borderRadius:10}}>click me</button></center>
   </div>
  )
}
export default App

//increment and decrement
import React,{useState} from 'react'

function App(props) {
  var initialValue=0;
  const [variable,ChangeVariable] = useState(initialValue)
  const handleClick = ()=>{
     ChangeVariable(variable+1)
  }
  const decrementClick = ()=> {
     ChangeVariable(variable-1)
  }
  return (
   <div>
       <center><h1>Counter Value: {variable}</h1>
       <button onClick={handleClick} style={{weight:20,height:30,fontWeight:'bold',borderRadius:10,marginRight:20}}>increment</button>
       <button onClick={decrementClick} style={{weight:20,height:30,fontWeight:'bold',borderRadius:10}}>decrement</button></center>
   </div>
  )
}
export default App

//display input text to side
import React,{useState} from 'react'
import './style.css'
function App(props) {
  const [message,setMessage]=useState('')
 
  return (
    <div id="imageContainer">
      
      
      <input style={{weigth:100,height:50,borderRadius:10,marginTop:20,fontWeight:'bold'}} type='text' placeholder='type here' onChange={e =>setMessage(e.target.value)}/><br></br>
      <h2>{message}</h2>
      
      </div>
  )
}

export default App

//input enables or disable
import React,{useState} from 'react'

function App(props) {
  const [isEnabled ,setvariable] = useState(true);
  const handleClick= ()=>{
  
  setvariable(false)
  }

  return (
    <div>
      <input style={{weight:20,height:20,borderRadius:10,fontWeight:'bold'}} type='text' disabled={isEnabled}/>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}
export default App

//hide/show
import React,{useState} from 'react'
import Pic from '../src/images/vaishu.jpg'
import './style.css'
function App(props) {
 
  const [variable,setvariable] = useState()
  return (
    <div className="bigContainer">
      { variable ? <img style={{height:200,weight:200}} src={Pic} alt="not found"/> : null}
       <button onClick={()=>{setvariable(!variable)}}> hide/show</button>
    </div>
  )
}
export default App


//forgot password and change password
import React from 'react'
import Container from '../src/pages/AppContainer.jsx'
import './style.css'

function App(props) {
  

  return (
    <div className="bigContainer">
      <Container/>
    </div>
  )
}
export default App


//dynamic rendering of components
// import { TextField } from '@material-ui/core'
// import React,{useState} from 'react'

// function App() {
//   const [inputFields,setInputField] = useState([
//     { firstName : ""}
    
//   ])
//   const handleAddFields =()=>{
//     setInputField([...inputFields, { firstName: ""}])
//   }
//   return (
//     <div>
//       <h1>Add new member</h1>
//       { inputFields.map((inputField, index) => (
//         <div key={index}>
//           <TextField
//             name="fiestName"
//             label="First Name"
//             value={inputField.firstName}/>
            
//         </div>
//       ))}
//       <button onClick={()=> handleAddFields()}>Add</button>
//     </div>
//   )
// }

// export default App

import React from 'react'
import './style.css'
import Container from '../src/pages/ContainerPrj.jsx'
function App(props) {

  

  return (
    <div classname="bigContainer">
    <Container/>
    </div>
  )
}

export default App