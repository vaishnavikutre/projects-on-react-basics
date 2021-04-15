import React from 'react'
import { Button } from 'react-bootstrap';
import '../style.css'

function Button1(props) {
    

    return (
        
          <Button className="btn" style={{background:props.color}} >{props.button}</Button>  
        
    )
}
export default Button1