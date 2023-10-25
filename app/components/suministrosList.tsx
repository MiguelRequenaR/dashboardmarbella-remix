import { useState, useEffect } from 'react'

function SuministrosList() {
  const [suministros, setSuministros] = useState<any[]>([])

  useEffect(() => {
    async function obtenerSuministros() {
      try{
        const respuesta = await fetch('http://localhost:3000/suministros')
        if (respuesta.ok) {
          const suministros = await respuesta.json()
          setSuministros(suministros)
        }else{
          console.log('Error al obtener los suministros')
        }
      }catch(error){
        console.log('Error al obtener los suministros')
      }
    }
    obtenerSuministros();
  }, []);

  return (
    <div className="flex justify-center">
      <table className="bg-[#fff] w-[90%] shadow mt-5 table-auto">
        <thead className="bg-[#38c2cf] text-white">
          <tr>
            <th className="p-2">Código</th>
            <th className="p-2">Producto</th>
            <th className="p-2">Cantidad</th>
            <th className="p-2">Proveedor</th>
            <th className="p-2">Fecha de ingreso</th>
            <th className="p-2">Fecha de salida</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {suministros.map((suministro) => (
            <tr key={suministro.id}>
              <td className="p-6 space-y-2 text-xl text-gray-800 text-center">{suministro.codigo}</td>
              <td className="p-6 space-y-2 text-xl text-gray-800 text-center">{suministro.producto}</td>
              <td className="p-6 space-y-2 text-xl text-gray-800 text-center">{suministro.cantidad}</td>
              <td className="p-6 space-y-2 text-xl text-gray-800 text-center">{suministro.proveedor}</td>
              <td className="p-6 space-y-2 text-xl text-gray-800 text-center">{suministro.fechaingreso}</td>
              <td className="p-6 space-y-2 text-xl text-gray-800 text-center">{suministro.fechasalida}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SuministrosList