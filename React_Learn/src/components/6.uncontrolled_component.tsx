import { useRef } from 'react'

function Form() {
  const inputRef = useRef() //{current:{value}}
  const handleInput=(e)=>{
    console.log(e.target.value)
    console.log(inputRef.current.value)
  }
  return (
    <form>
      <input ref={inputRef} onChange={handleInput} type="text" className='border-black border px-2 py-1 text-black rounded-2xl bg-green-200 mr-1'/>
      <button className='bg-green-300 px-2 p-1 text-black rounded-2xl'>Submit</button>
    </form>
  )
}

export default Form

// form element managed by DOM, no react overhead liek state