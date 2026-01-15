import {useRef} from 'react'
const Input = () => {
    const inputRef=useRef<HTMLInputElement>(null)
    const handle=()=>{
        // console.log(e.target.value)// cannot use event here
        console.log(inputRef.current?.value)
    }
  return (
 <>
    <input 
    className='border-black border px-2 py-1 text-black rounded-2xl bg-green-200 mr-1' 
    ref={inputRef} />

    <button onClick={handle}>submit</button>
 </>
  )
}

export default Input