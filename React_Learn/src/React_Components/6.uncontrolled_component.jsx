import { useRef } from "react"

function Form() {
  const inputRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    console.log(inputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} />
      <button>Submit</button>
    </form>
  )
}

export default Form

// form element managed by DOM, no react overhead liek state