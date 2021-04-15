import React from 'react'
import Input1 from './Input.jsx'
import Botton1 from './bootstrapButton.jsx'
function Changepass(props) {
    

    return (
        <div>
            <center>
           <Input1 name="current password"/>
            <Input1 name="original password"/>
            <Input1 name="varify password"/>
            <Botton1 botton="submit"/>
            </center>
        </div>
    )
}

export default Changepass