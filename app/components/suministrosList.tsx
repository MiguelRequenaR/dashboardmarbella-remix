import { useLoaderData } from "@remix-run/react"
import { useNavigate, Form } from "@remix-run/react";
import { obtenerSuministros } from "~/data/suministros";

type Suministro = {
  id: number;
  codigo: string;
  producto: string;
  cantidad: number;
  proveedor: string;
  fechaingreso: string;
  fechasalida: string;
};

export async function loader(){
  const suministros: Suministro[] = await obtenerSuministros();
  return suministros;
}

function SuministrosList() {
  const navigate = useNavigate();
  const suministros: Suministro[] = useLoaderData();

  if(!suministros || suministros.length === 0) {
    return (
      <div className="flex justify-center">
        <p className="text-xl text-gray-800">No hay suministros registrados</p>
      </div>
    )
  }

  return (
    <div className="flex justify-center">
      <table className="bg-[#fff] w-[90%] shadow mt-5 table-auto">
        <thead className="bg-[#38c2cf] text-white">
          <tr>
            <th className="p-2">ID</th>
            <th className="p-2">Código</th>
            <th className="p-2">Producto</th>
            <th className="p-2">Cantidad</th>
            <th className="p-2">Proveedor</th>
            <th className="p-2">Fecha de Ingreso</th>
            <th className="p-2">Fecha de Salida</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {suministros.map((item) => (
            <tr 
              className="border-b"
              key={item.id}
            >
              <td className="p-6 space-y-2 text-xl text-gray-800 text-center">{item.id}</td>
              <td className="p-6 space-y-2 text-xl text-gray-800 text-center">{item.codigo}</td>
              <td className="p-6 space-y-2 text-xl text-gray-800 text-center">{item.producto}</td>
              <td className="p-6 space-y-2 text-xl text-gray-800 text-center">{item.cantidad}</td>
              <td className="p-6 space-y-2 text-xl text-gray-800 text-center">{item.proveedor}</td>
              <td className="p-6 space-y-2 text-xl text-gray-800 text-center">{item.fechaingreso}</td>
              <td className="p-6 space-y-2 text-xl text-gray-800 text-center">{item.fechasalida}</td>
              <td className="p-6 flex gap-5 justify-around">
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-900 uppercase font-bold"
                  onClick={() => navigate(`/suministros/${item.id}/editar`)}
                >
                  Editar
                </button>
                <Form
                  method="post"
                  action={`/suministros/${item.id}/eliminar`}
                  onSubmit={(event) => {
                    if(!confirm('¿Estás seguro de eliminar este suministro?')) {
                      event.preventDefault()
                    }
                  }}
                >
                  <button
                    type="button"
                    className="text-red-600 hover:text-red-900 uppercase font-bold"
                    onClick={() => navigate(`/suministros/${item.id}/eliminar`)}
                  >
                    Eliminar
                  </button>
                </Form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SuministrosList