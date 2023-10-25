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
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Proveedor</th>
            <th>Fecha de ingreso</th>
            <th>Fecha de salida</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {suministros.map((suministro) => (
            <tr key={suministro.id}>
              <td>{suministro.codigo}</td>
              <td>{suministro.producto}</td>
              <td>{suministro.cantidad}</td>
              <td>{suministro.proveedor}</td>
              <td>{suministro.fechaingreso}</td>
              <td>{suministro.fechasalida}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SuministrosList