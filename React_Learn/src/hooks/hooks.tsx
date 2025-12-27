import UseEffectComponent,{ UserList } from "./useEffect/1.useEffect";
import Counter1 from "./useEffect/2.useEffect_with_dependency";
import Counter2 from "./useRef/1.useRef";
import Label from "../components/3.presentational_component";

function Hooks() {
  return (
    <div>
         <div className="border border-black p-2 rounded-2xl">
      <Label label="useEffect hook to perform side effects" />
      <br />
        <UseEffectComponent />
      <Label label="useEffect hook to perform side effects" />
        <UserList />
      </div>
    
      <div className="border border-black p-2 rounded-2xl">
      <Label label="useEffect hook to perform side effects with dependency" />
      <br />
        <Counter1 />
      </div>

      <div className="border border-black p-2 rounded-2xl">
      <Label label="useRef case 1 - mutable value across renders(no re render for change value)" />
      <br />
        <Counter2 />
      </div>

    </div>
  )
}

export default Hooks