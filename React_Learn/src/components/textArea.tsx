import { ChangeEvent, useState } from "react"

const TextArea = () => {
  const [value,setValue] = useState('')
  const handleChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
    setValue(e.target?.value)
  }
    return (
        <form action="">
            <label htmlFor=""> Write Here : 
                <textarea name="description" value={value} onChange={handleChange} />
            </label>
        </form>
    )
}

export default TextArea