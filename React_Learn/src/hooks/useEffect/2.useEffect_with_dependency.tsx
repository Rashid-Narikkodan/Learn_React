import { useState, useEffect } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        document.title = `Count ${count}`
    },[count])
  return (
    <div>
        <div>Count - {count}</div>
        <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}

export default Counter