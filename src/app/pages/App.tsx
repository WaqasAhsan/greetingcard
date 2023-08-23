import { useState } from "react";

export const App = () => {
  const [message, setMessage] = useState("");

  //   const handleChange =  (event) => {
  //     setMessage(event.target.value);
  //     console.log("value is:", event.target.value);
  //   };
  const handleChange = (event: {
    preventDefault: () => void;
    target: { name: { value: any } };
  }) => {
    event.preventDefault();
    alert(`So your name is ${event.target.name.value}?`);
  };

  return (
    <div>
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
      />

      <h2>Message: {message}</h2>
    </div>
  );
};
