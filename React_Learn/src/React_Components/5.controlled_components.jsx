import { useState } from "react"

export default function Input(){
    const [value,setValue] = useState('')
    return (
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
    )
}
//Form components where React controls the value.