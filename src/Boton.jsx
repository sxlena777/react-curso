import { useState } from "react";

const incrementar= {
  'border-radius':'4px',
  'background':'green'
}
const decrementar= {
  'border-radius':'4px',
  'background':'salmon'
}
const reset= {
  'border-radius':'4px',
  'background':'blue',
  'color':'white'
}


export const Boton = () => {
  const [nombre, setName] = useState(0);
  return (
      
    <div>      
      <h3>Contador: {nombre}</h3>
     
      <button style={incrementar} onClick={()=>{setName(nombre+1)}}>
        Incrementar
      </button>

      <button style={decrementar} onClick={()=>{setName(nombre-1)}}>
        Decrementar
      </button>

      <button style={reset} onClick={()=>{setName(0)}}>
        Reset
      </button>

    </div>
  );
};
