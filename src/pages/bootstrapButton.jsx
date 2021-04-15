import React from 'react'
import Button from 'react-bootstrap/Button'
function Bootstrapbutton(props) {
    const handleClick=()=>{
        if (props.botton==="forgot Password")
        {
        props.receiveDataFun("ForgotPass1");
       }
       else
       {
        props.receiveDataFun("Changepass1");   
       }
    }
    return (
        <div>
            <Button style={{height:60,weight:40,margin:10}} onClick={handleClick}>{props.botton}</Button>
        </div>
    )
}
export default Bootstrapbutton