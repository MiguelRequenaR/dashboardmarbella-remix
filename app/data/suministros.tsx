export async function obtenerSuministros(){
    const respuesta = await fetch(`http://localhost:3000/suministros`);
    const resultado = await respuesta.json();
    return resultado;
}

export async function obtenerSuministro(id: number){
    const respuesta = await fetch(`http://localhost:3000/suministros/${id}`);
    const resultado = await respuesta.json();
    return resultado;
}

export async function crearSuministro(datos: string){
  try{
    const respuesta = await fetch(`http://localhost:3000/suministros`, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    await respuesta.json();
  }catch(error){
    console.log(error);
  }
}

export async function editarSuministro(id: number, datos: string){
  try{
    const respuesta = await fetch(`http://localhost:3000/suministros/${id}`, {
        method: 'PUT',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    await respuesta.json();
  }catch(error){
    console.log(error);
  }
}

export async function eliminarSuministro(id: number){
  try{
    const respuesta = await fetch(`http://localhost:3000/api/suministros/${id}`, {
        method: 'DELETE',
    });
    await respuesta.json();
  }catch(error){
    console.log(error);
  }
}