import { useState } from "react";
const Form = () => {
  const [value, setValue] = useState("");
  const handleInput = (e) => {
    const inp = e.target.value;
    setValue(inp);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    window.location.href = "/search/?search=" + value;
  };

  return (
    <form>
      <input
        type="text"
        value={value}
        onChange={handleInput}
        placeholder="Wpisz wyszukiwane słowo..."
      />
      <button onClick={handleSearch}>Szukaj</button>
    </form>
  );
};

export default Form;
