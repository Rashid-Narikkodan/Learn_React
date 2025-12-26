import {
  Label,
  Counter,
  Counter2,
} from "./React_Components/1.function_components";
import Button from "./React_Components/2.class_component";
import Label2 from "./React_Components/3.presentational_component";
import UserContainer from "./React_Components/4.container_component";
import Input from "./React_Components/5.controlled_components";
import Header from "./React_Components/nested_component";
import Form from "./React_Components/6.uncontrolled_component";

export default function App() {
  return (
    <div>
      <Label label="This is itself a Function Components" />
      <br />
      <Label label="This is Function Components without state" />
      <Counter />
      <Label label="This is Function Components with state" />
      <Counter2 />
      <br />

      <br />
      <Label label="This is a Nested Components" />
      <br />
      <Header />
      <br />
      <br />

      <Label label="This is Class Components" />
      <br />
      <Button />

      <br />
      <br />
      <Label label="This is a presentation component" />
      <br />
      <Label2 label="This presenattional component only contain UI, no state, no side effects, pure function" />

      <br />
      <br />
      <Label label="This is a container component" />
      <br />
      <UserContainer />

      <br />
      <br />
      <Label label="This is a controlled component" />
      <br />
      <Input />
      <Label label="Controlled components are those form components value controlled by react state" />


      <br />
      <br />
      <Label label="This is a controlled component" />
      <br />
      <Form />
    </div>
  );
}
