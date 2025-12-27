import {
  Label,
  Counter,
  Counter2,
} from "./components/1.function_components";
import Button from "./components/2.class_component";
import Label2 from "./components/3.presentational_component";
import UserContainer from "./components/4.container_component";
import Input from "./components/5.controlled_components";
import Header from "./components/nested_component";
import Form from "./components/6.uncontrolled_component";
import UseEffectComponent,{ UserList } from "./hooks/useEffect";


export default function App() {
  return (
    <div className="bg-linear-to-r from-violet-800 to-black  text-white">
      <div className="border border-black p-2 rounded-2xl">
        <Label label="This is itself a Function Components" />
        <br />
        <Label label="This is Function Components without state" />
        <Counter />
        <Label label="This is Function Components with state" />
        <Counter2 />
      </div>
      <br />
      <div className="border border-black p-2 rounded-2xl">
        <Label label="This is a Nested Components" />
        <br />
        <Header />
      </div>
      <br />
      <div className="border border-black p-2 rounded-2xl">
      <Label label="This is Class Components" />
      <br />
      <Button />
      </div>

      <br />
      <div className="border border-black p-2 rounded-2xl">
      <Label label="This is a presentation component" />
      <br />
      <Label2 label="This presenattional component only contain UI, no state, no side effects, pure function" />
      </div>
      <br />
      <div className="border border-black p-2 rounded-2xl">
      <Label label="This is a container component" />
      <br />
      <UserContainer />
      </div>

      <br />
      <div className="border border-black p-2 rounded-2xl">
      <Label label="This is a controlled component" />
      <br />
      <Input />
      <br />
      <Label label="Controlled components are those form components value controlled by react state" />
      </div>

      <br />
      <div className="border border-black p-2 rounded-2xl">
      <Label label="This is a uncontrolled component" />
      <br />
      <Form />
      <Label label="Form components wich values are controlled by DOM using React Hooks like useRef()" />
      </div>

      <div className="border border-black p-2 rounded-2xl">
        <UseEffectComponent />
        <UserList />
      </div>
    </div>
  );
}
