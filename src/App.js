import React, { useState } from "react";
import CurrencyConverter from "./components/CurrencyConverter";
import Math from "./components/Math";
import Input from "./components/UI/Input";
import Layout from "./components/UI/Layout";

export default function App() {
  const [text, setText] = useState("");

  return (
    <>
      <Layout>
        <div className="flex flex-col w-screen space-around ml-[1rem] ">
          <Input handleChange={(e) => setText(e)} />
          <Math text={text} />
        </div>
      </Layout>
    </>
  );
}
