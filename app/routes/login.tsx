import { useState } from 'react'
import { Link } from '@remix-run/react'
import { motion } from 'framer-motion'
import Register from './register'

function Login() {

    const [nombre, setNombre] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [mostrar, setMostrar] = useState(false)

    const alternarRegistro = () => {
        setMostrar(!mostrar)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if([nombre, password].includes('')) {
            setError(true)
            return
        }
        setError(false)
    }

  return (
    <div className='bg-[#e3e9f3]'>
        {mostrar ? (
            <Register />
        ): (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className='flex flex-col-2 items-center justify-center h-screen'>
                    <div className='bg-[#eaf5f5] w-[389px] h-[509px] rounded-l-lg shadow-2xl'>
                        <div className="flex flex-col items-center justify-around mt-5">
                            <img
                                src="/img/logoCM.png"
                                alt="logo"
                                width={70}
                                height={10}
                                className="object-contain rounded-full"
                            />
                            <h1 className="font-black text-indigo-600">CONSTRUCTORA MARBELLA</h1>
                        </div>
                        <div className='flex justify-around items-center mb-8 pt-6'>
                            <h2 className='text-[#292f30] text-2xl font-black'>Iniciar Sesión</h2>
                            <p 
                                className='text-indigo-600 text-sm cursor-pointer'
                                onClick={alternarRegistro}
                            >
                                Regístrate
                            </p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            {error && 
                                <div className='bg-red-600 text-white font-bold uppercase mx-6 py-3 text-center mb-6'>
                                    Todos los campos son necesarios
                                </div>
                            }
                            <div className='flex justify-center'>
                                <input 
                                    type="text" 
                                    placeholder='Usuario'
                                    className='bg-white px-2 py-2 rounded-lg w-[80%] mb-5 border border-gray-300'
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                /> 
                            </div>
                            <div className='flex justify-center'>
                                <input 
                                    type="text"
                                    placeholder='Contraseña'
                                    className='bg-white px-2 py-2 rounded-lg w-[80%] mb-10 border border-gray-300'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className='flex justify-center'>
                                <Link to={'/dashboard'}>
                                    <input 
                                        className='bg-indigo-600 text-white px-3 py-3 rounded-full shadow-lg w-[270px] focus:outline-none hover:bg-indigo-800 transition duration-500 ease-in-out cursor-pointer'
                                        type="submit"
                                        value={'Iniciar Sesión'}
                                    />  
                                </Link>                              
                            </div>
                        </form>
                    </div>
                    <div className="flex items-center justify-center w-[389px] h-[509px] bg-[#295dc3] shadow-2xl rounded-r-lg">
                        <img
                            src="/img/loginImage.jpg"
                            alt="logo"
                            width={300}
                            height={10}
                            className="object-contain"
                        />
                    </div>
                </div>
            </motion.div>
        )} 
    </div>
  )
}

export default Login