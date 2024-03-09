import React from "react";
import Stats from "./Stats";
import Warning from "./Warning";
import { wordFilter } from "../utils";

const Container = () => {
  const [text, setText] = React.useState("");
  const [warning, setWarning] = React.useState(false);

  const changeHandler = (e) => {
    const filtered = wordFilter(e.target.value);
    setText(filtered.text);
    setWarning(filtered.warning);
  };

  return (
    <main className="container">
      <textarea
        value={text}
        onChange={changeHandler}
        className="textarea"
        id="input"
        placeholder="Enter your text here"
      />
      {warning && <Warning warning={warning} />}
      <Stats text={text} />
    </main>
  );
};

export default Container;
