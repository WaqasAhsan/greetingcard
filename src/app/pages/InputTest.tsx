import { SetStateAction, useState } from "react";
import { resolveModuleNameFromCache } from "typescript";

export default function App() {
  const [message, setMessage] = useState("");
  const [updated, setUpdated] = useState(message);

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    setUpdated(message);
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

      <h2>Updated: {updated}</h2>

      <button onClick={handleClick}>Update Button</button>
    </div>
  );
}
