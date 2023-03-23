import React from 'react'
import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({isValidPresupuesto, setIsValidPresupuesto, presupuesto, setPresupuesto, gastos, setGastos}) => {
  return (
    <header>
        <div>
            <h1>PLANIFICADOR DE GASTOS</h1>

            {isValidPresupuesto ? 
            <ControlPresupuesto 
            gastos={gastos}
            presupuesto={presupuesto}
            setGastos={setGastos}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
            
            
            /> 
            : (
            <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            
            isValidPresupuesto={isValidPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
            />
            )}
        
        </div>
  
    </header>
  )
}

export default Header
