import { useState } from "react"

export default function Input(){
    const [value,setValue] = useState('')
    return (
        <input className="border border-black text-black bg-white" type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
    )
}
//Form components where React controls the value.