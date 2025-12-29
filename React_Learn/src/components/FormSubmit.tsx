import { ChangeEvent, FormEvent, useState } from 'react'

function FormSubmit() {
    const [value,setValue] = useState('')
    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target?.value)
    }
    const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(confirm('dsfcsef')){
            e.currentTarget.submit()
        }else{
            throw new Error('error')
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} placeholder='Enter name'/>
        <button type="submit" className="bg-blue-400 rounded text-black px-2 py-1">Submit</button>
    </form>
  )
}

export default FormSubmit