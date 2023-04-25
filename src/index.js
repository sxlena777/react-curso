import React from "react";
import ReactDOM from "react-dom/client";
import { CompEjemplo, ComponenteCard } from "./comp";

const rootElement = document.getElementById("root"); //elemento root seleccionado
const root = ReactDOM.createRoot(rootElement);

root.render(
  <>
    <CompEjemplo title="Hola 1" />

    <ComponenteCard
      nombre="lautaro"
      nick="zoso"
      edad={30}
      casado={true}
      direccion={{
        calle: "street example",
        altura: 123,
        edificio: false, // false -> casa | true -> Departamento
      }}
    />
  </> // cierre de fake tag
);
