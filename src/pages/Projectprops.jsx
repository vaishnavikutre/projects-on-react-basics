import React from 'react'
import './style.css'
import Button from './pages/button'

function Projectprops(props) {
  

  return (
   <div className="BContainer">
     <div className="upperContainer">

       <center><Button button="colorful buttons BOX" color="radial-gradient(circle, red, yellow)"/></center>

       <div className="lowerContainer">
       <Button button="I am blue color button" color="#536dfe"/>
       <Button button="I am green color button" color="#4caf50"/>
       <Button button="I am yellow color button" color="#eeff41"/>
       <Button button="I am red color button" color="#f44336"/>
       </div>

     </div>

   </div>
  )
}
export default Projectprops
