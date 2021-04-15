import React from 'react'
import Header from './header.jsx'

import List from './list.jsx'
import '../style.css'
function Containerprj(props) {
   
     
    return (
        <div className="prg">
            <Header headerName="My Shop"/>
            <List/>
            
          

        </div>
    )
}

export default Containerprj