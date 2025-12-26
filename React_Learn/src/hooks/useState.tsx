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