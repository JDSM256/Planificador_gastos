import React, { useState } from 'react'
import Mensaje from './Mensaje'
const NuevoPresupuesto = ({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto }) => {
    
    const [mensaje,setMensaje]=useState('')

    const handlePresupuesto= e =>{
        e.preventDefault();

        if ((!presupuesto) || (presupuesto<0)){
            setMensaje('Presupuesto invalido')
            return
        }

        setMensaje('')
        setIsValidPresupuesto(true)
        

        
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        
        <form onSubmit={handlePresupuesto} className="formulario">
        
            <div  className='campo'>
                <label>Definir presupuesto</label>
                <input 
                type="number" 
                placeholder='Añade tu presupuesto'
                onChange={(e) => setPresupuesto(Number(e.target.value))}
                value={presupuesto}
                />
            </div>
            <input 
            type="submit" 
            value='AÑADIR'
            />

            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

        </form>
      
    </div>
  )
}

export default NuevoPresupuesto
