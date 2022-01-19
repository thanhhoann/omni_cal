import React, { useState } from "react";
import CurrencyConverter from "./components/CurrencyConverter";
import Help from "./components/Help";
import Math from "./components/Math";
import Input from "./components/UI/Input";
import Layout from "./components/UI/Layout";

export default function App() {
  const [text, setText] = useState("");

  function isNumeric(str) {
    if (typeof str != "string") return false; // we only process strings!
    return (
      !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
      !isNaN(parseFloat(str))
    ); // ...and ensure strings of whitespace fail
  }

  return (
    <>
      <Layout>
        <div className="flex flex-col w-screen space-around ml-[1rem] ">
          <Input handleChange={(e) => setText(e)} />
          <Help text={text} />
          <Math text={text} />
          <CurrencyConverter />
        </div>
      </Layout>
    </>
  );
}
