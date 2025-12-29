import { ChangeEvent, useState } from "react"
const Select = () => {
    const [choice, setChoice] = useState('select')
    const handleChoice=(e:ChangeEvent<HTMLSelectElement>)=>{
        setChoice(e.target.value)
    }
  return (
    <>
    <select value={choice} onChange={handleChoice} className="border border-cyan-500 rounded-2xl">
        <option className="text-black bg-cyan-600 rounded-3xl" value="Volvo">Volvo</option>
        <option className="text-black bg-cyan-600 rounded-3xl" disabled value="select">Select</option>
        <option className="text-black bg-cyan-600 rounded-3xl" value="BMW">BMW</option>
        <option className="text-black bg-cyan-600 rounded-3xl" value="GTR">GTR</option>
    </select>
    <p>Selected:{choice}</p>
    </>
  )
}

export default Select