import { useRef } from "react"

function Counter() {
  let countRef = useRef(0)
  countRef.current++
  return (
    <div>{`Click ${countRef.current}`}</div>
  )
}

export default Counter