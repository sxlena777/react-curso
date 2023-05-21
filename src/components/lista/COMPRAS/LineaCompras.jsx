import compras from "./compras";
import { BotonCheckBox } from "../botonCheckbox";
import ModalVerMas from "../modalVerMas";

const LineaCompras = () => {
  return (
    <tbody>
      {compras.map((usuario) => {
        return (
          <tr>
            <td className="centrado">
              <BotonCheckBox />
            </td>

            <td>{usuario.fecha_compra}</td>
            <td>{usuario.id_compra}</td>
            <td>{usuario.proveedor}</td>
            {/* 
            <td>{usuario.recepcionista}</td>
            <td>{usuario.cantidad}</td>
            <td>{usuario.descrip_compra}</td> 
            */}

            <td>{usuario.total}</td>

            <td>
              <ModalVerMas
                recepcionista={usuario.recepcionista}
                cantidad={usuario.cantidad}
                descrip_compra={usuario.descrip_compra}
              />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default LineaCompras;
