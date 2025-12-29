import { Label, Counter, Counter2 } from "./1.function_components";
import Button from "./2.class_component";
import Label2 from "./3.presentational_component";
import UserContainer from "./4.container_component";
import Input from "./5.controlled_components";
import Header from "./nested_component";
import Form from "./6.uncontrolled_component";
import Form2 from './Form'
import List from "./list";
import Border from "./Border";
import FormSubmit from "./FormSubmit";
import TextArea from "./textArea";
import Select from "./option_select";
import MultiInputForm from "./formWithMultiInput";
function Components() {
  return (
    <>
    <Border> {/* props.children */}
        <Label label="This is itself a Function Components" />
        <br />
        <Label label="This is Function Components without state" />
        <Counter />
        <Label label="This is Function Components with state" />
        <Counter2 />
    </Border>

      <br />
      <Border>
        <Label label="This is a Nested Components" />
        <br />
        <Header />
    </Border>
      <br />
      <Border>
        <Label label="This is Class Components" />
        <br />
        <Button />
    </Border>

      <br />
      <Border>
        <Label label="This is a presentation component" />
        <br />
        <Label2 label="This presenattional component only contain UI, no state, no side effects, pure function" />
    </Border>
      <br />
      <Border>
        <Label label="This is a container component" />
        <br />
        <UserContainer />
    </Border>

      <br />
      <Border>
        <Label label="This is a controlled component" />
        <br />
        <Input />
        <br />
        <Label label="Controlled components are those form components value controlled by react state" />
    </Border>

      <br />
      <Border>
        <Label label="This is a uncontrolled component" />
        <br />
        <Form />
        <Label label="Form components wich values are controlled by DOM using React Hooks like useRef()" />
    </Border>

      <br />
      <Border>
        <Label label="List an array in a component" />
        <br />
        <List cars={[{id:1,name:'GTR'},{id:2,name:"Mustang"},{id:3,name:"BMW"}]}/>
        <Label label="Form components wich values are controlled by DOM using React Hooks like useRef()" />
    </Border>

      <br />
    <Border>
        <Label label="This is a Form component" />
        <br />
        <Form2 />
    </Border>
      <br />
    <Border>
        <Label label="This is a Form submit component" />
        <br />
        <FormSubmit />
    </Border>
      <br />
    <Border>
        <Label label="This is a Text area component" />
        <br />
        <TextArea />
    </Border>
      <br />
    <Border>
        <Label label="This is a Select a option component" />
        <br />
        <Select/>
    </Border>
    <Border>
        <Label label="This is a multiInput form component" />
        <br />
        <MultiInputForm/>
    </Border>
    </>
  );
}
export default Components;
