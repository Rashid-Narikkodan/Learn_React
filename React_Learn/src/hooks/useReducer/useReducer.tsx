import { useReducer } from "react"
import { Count } from "../../reducers/count"
const useReducerComp = () => {
    const [value,dispatch]=useReducer(Count,0)
  return (
    <div>
        <button onClick={()=>dispatch(1)} className='p-5 rounded bg-blue-300'>
            +
        </button>
        <div>
    {value}
        </div>
        <button onClick={()=>dispatch(-1)} className='p-5 rounded bg-blue-300'>
            -
        </button>
    </div>
  )
}

export default useReducerComp