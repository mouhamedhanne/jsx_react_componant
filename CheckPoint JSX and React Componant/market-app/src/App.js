import React from "react";
import { Navigation, Recherche } from "./Navigation";
import CardItem from "./Card";
import Message from "./Message";

const App = () => {
  return (
    <div>
      <Navigation />
      <Recherche />
      <CardItem />
      <Message />
    </div>
  );
};

export default App;
