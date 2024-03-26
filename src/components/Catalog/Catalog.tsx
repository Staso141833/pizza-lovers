import React from "react";

interface PizzaProps {
  items: { id: string; name: string; pasteKind: string; products: string }[];
}

export const PizzaCatalog: React.FC<PizzaProps> = (props) => {
  return (
    <ul>
      {props.items.map((pizza) => (
        <li key={pizza.id}>{pizza.name}</li>
      ))}
    </ul>
  );
};
