import UseEffectComponent, { UserList } from "./useEffect/1.useEffect";
import Counter1 from "./useEffect/2.useEffect_with_dependency";
import Counter2 from "./useRef/1.useRef";
import Label from "../components/3.presentational_component";
import Input from "./useRef/2.dom_access";
import Border from "../components/Border";
function Hooks() {
  return (
    <>
      <br />
      <Border>
        <Label label="useEffect hook to perform side effects" />
        <br />
        <UseEffectComponent />
        <Label label="useEffect hook to perform side effects" />
        <UserList />
      </Border>

      <br />
      <Border>
        <Label label="useEffect hook to perform side effects with dependency" />
        <br />
        <Counter1 />
      </Border>

      <br />
      <Border>
        <Label label="useRef case 1 - mutable value across renders(no re render for change value)" />
        <br />
        <Counter2 />
      </Border>

      <br />
      <Border>
        <Label label="useRef case 2 - Use in DOM, when value ipdated we dont need to re render so use useRef" />
        <br />
        <Input />
      </Border>
    </>
  );
}

export default Hooks;
