import React from "react";

import { PizzaCatalog } from "./components/Catalog/Catalog";
import { CreatePizza } from "./components/Create/Create";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";

const App: React.FC = () => {
  const pizzas = [
    { id: "p1", name: "Margarita", pasteKind: "semola", products: "peperoni" },
    { id: "p2", name: "Peperoni", pasteKind: "semola", products: "peperoni" },
  ];
  return (
    <div className="App">
      <PizzaCatalog items={pizzas}></PizzaCatalog>
      {/* <CreatePizza></CreatePizza> */}
      {/* <Login></Login> */}
      <Register></Register>
    </div>
  );
};

export default App;
