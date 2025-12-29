import { ChangeEvent, useState } from "react";
type FormInput = {
  firstName: string;
  lastName: string;
};
const MultiInputForm = () => {
  const [inputs, setInputs] = useState<FormInput>({
    firstName: "",
    lastName: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => {
      return {
        ...prev,
        [name as keyof FormInput]: value,
      };
    });
  };
  return (
    <form>
      <label>
        First name:
        <input
          type="text"
          name="firstName"
          value={inputs?.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          type="text"
          name="lastName"
          value={inputs?.lastName}
          onChange={handleChange}
        />
      </label>
      <p>
        Current values: {inputs?.firstName} {inputs?.lastName}
      </p>
    </form>
  );
};

export default MultiInputForm;
