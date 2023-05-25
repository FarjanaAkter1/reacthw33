import React from "react";
import { List } from "./List";
import "./App.css";
export const App = () => {
  const itemList = ["dog 💀", "cat💀", "chicken💀", "cow💀", "sheep💀", "horse💀"];

  return (
    <div>
      <List data={itemList} />
    </div>
  );
};

export default App;
