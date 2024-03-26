import React from "react";

import { PizzaCatalog } from "./components/Catalog/Catalog";
import { CreatePizza } from "./components/Create/Create";

const App: React.FC = () => {
  const pizzas = [
    { id: "p1", name: "peperoni", pasteKind: "semola", products: "peperoni" },
    { id: "p2", name: "peperoni", pasteKind: "semola", products: "peperoni" },
  ];
  return (
    <div className="App">
      <PizzaCatalog items={pizzas}></PizzaCatalog>
      <CreatePizza></CreatePizza>
    </div>
  );
};

export default App;
