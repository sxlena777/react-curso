// Los props (propiedades), son un mecanismo para pasar datos y funcionalidades de un componente padre a un componente hijo.}

export function CompEjemplo(props) {
  console.log(props);
  return <h2>{props.title}</h2>;
}

export function ComponenteCard(props) {
  console.log(props);

  return (
    <div>
        
      <h3>Tarjeta de Presentacion</h3>
      <ul>
        <li>Nombre: {props.nombre}</li>
        <li>Nick: {props.nick}</li>
        <li>Edad: {props.edad}</li>
        <li>
          Vive en {props.direccion.edificio ? "un departamento" : "una casa"}
        </li>
      </ul>

    </div>
  );
}


