import { useRef } from "react"

function Counter() {
  const countRef = useRef(0);
  return <button onClick={()=>console.log('Count'+countRef.current++)}>Click {countRef.current}</button>;
}


export default Counter