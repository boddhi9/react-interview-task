import React from "react";

import useContextProvider from "../hooks/useContextProvider";

import Counter from "./Counter";
import ButtonSync from "./ButtonSync";
import ButtonAsync from "./ButtonAsync";
import ButtonUndoRedo from "./ButtonUndoRedo";

function App() {
  const ContextProvider = useContextProvider();

  return (
    <ContextProvider>
      <div className="app">
        <Counter />
        <ButtonSync />
        <ButtonAsync />
        <ButtonUndoRedo />
      </div>
    </ContextProvider>
  );
}

export default App;
