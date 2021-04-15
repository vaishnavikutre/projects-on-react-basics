import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
function App() {
  const [state, setstate] = useState(true)
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then((res)=>{
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }, [state])
  
  return (
    <div>
      <center>
        <h2>This is app component</h2>
        <Button onClick={()=>{setstate(false)}}>Fetch API</Button>
      </center>
    </div>
  )
}

export default App