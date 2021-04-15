import React from 'react'

function ConditionalRendering(props) {
  var isValid=false;
  if (isValid==true)
  {
    return(<button disabled={true}>I am disabled</button>)
  }
  else
  {
    return(<button disabled={false}>I am enabled</button>)
  }
}

export default ConditionalRendering

//in one line

// import React from 'react'

// function ConditionalRendering(props) {
//   var isValid=false;
//   return(
//   isValid ? <h1>hello vaishu</h1> : <h1>hello mansi</h1>
//   )
// }

// export default ConditionalRendering

//if only we want true condition then display this 
// import React from 'react'

// function ConditionalRendering(props) {
//   var isValid=true;
//   return(
//     <div>
//     {
//   isValid && <h1>hello vaishu</h1> 
//     }
//     </div>
//   )
// }

// export default ConditionalRendering