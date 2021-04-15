import React,{useState} from 'react'
import Botton1 from './bootstrapButton.jsx'
import Changepass1 from './ChangePass.jsx'
import ForgotPass1 from './ForgotPass.jsx'
import './style.css'

function Appcontainer(props) {
    const [state,setState] = useState("")
    

    const receiveData=(data)=>{
      console.log(data)
      setState(data)

    }
    

    return (
        <div>
           <div className="container">
            <Botton1 botton="forgot Password" color="#ce93d8" receiveDataFun={receiveData}/>
            <Botton1 botton="Change Password" color="#ce93d8" receiveDataFun={receiveData}/>
            </div>
          <center>
         
          {
            state === "ForgotPass1" && <ForgotPass1/>
          } 

          {
            state === "Changepass1" && <Changepass1/> 
          }
          
          </center>
        </div>    
    )
}
export default Appcontainer