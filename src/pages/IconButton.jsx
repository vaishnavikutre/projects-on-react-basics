import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
//import List from './list.jsx'
function IconB(props){

    const handleTestClick=()=>{
        props.receiveDataFun("List")
    }
   


   return(
       <div>
    <IconButton color="primary" aria-label="add to shopping cart" style={{marginLeft:800}} onClick={()=>handleTestClick()}>
    <AddShoppingCartIcon/>
    </IconButton>
   
    </div>
   )
    }


export default IconB