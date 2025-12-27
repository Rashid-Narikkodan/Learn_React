import { useState } from "react"
const useStateComponent = () => {
    const [x,setX]=useState(0) // create a state for function, that handles x variable
    const handleX=()=>{
        setX(x+1)
    }
  return (
    <div onClick={handleX}>{x}</div>
  )
}

export default useStateComponent

//react preserve a state for x and which is managed by setX
// so re-render in this function will not change teh x