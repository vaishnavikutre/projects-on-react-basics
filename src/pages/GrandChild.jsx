import React,{useContext} from 'react'
import {ThemeContainer} from '../App'
function GrandChild() {
    const value =useContext(ThemeContainer)
    return (
        <div>
            <hi>Hello I am {value}</hi>
        </div>
    )
}

export default GrandChild
