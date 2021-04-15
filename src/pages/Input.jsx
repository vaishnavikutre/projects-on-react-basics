import React from 'react'

import FormControl from 'react-bootstrap/FormControl'
function Input(props) {
    

    return (
        <div>
  
    <FormControl
      placeholder={props.name}
      aria-label="Username"
      aria-describedby="basic-addon1"
      style={{margin:10}}
    />
     </div>
    )
}
export default Input