import React, { useEffect, useState } from 'react'
import Mensaje from './Mensaje'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({modal,setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar}) => {

  const [mensaje,setMensaje]=useState('')

  const [nombre,setNombre]=useState('');
  const [cantidad,setCantidad]=useState(0);
  const [categoria,setCategoria]=useState('');
  const [fecha,setFecha]=useState('')
  const [id, setId]=useState('');

  useEffect(()=>{
    if (Object.keys(gastoEditar).length>0){
      setNombre(gastoEditar.nombre)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)
      setFecha(gastoEditar.fecha)
      setId(gastoEditar.id)
    }   
  },[]);

    const ocultarModal= () =>{
        
        setAnimarModal(false)
        setGastoEditar({})
        

        setTimeout(() => {
          setModal(false)
        }, 800);
    }

  const handleSubmit = e =>{
    e.preventDefault();

    if ([nombre,categoria,cantidad].includes('')){
      setMensaje('Todos los campos son obligatorios')
      setTimeout(() => {
      setMensaje('')
      }, 2000);
      return;
    }
    guardarGasto({nombre, cantidad, categoria, id, fecha})
  }
  
  

  return (
    <div className='modal'>
        <div className='cerrar-modal'>
            <img 
            src={CerrarBtn} 
            alt="Boton de cerrar" 
            onClick={ocultarModal}
            />
        </div>

        <form 
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" :"cerrar" }`}>
          <legend>{gastoEditar.nombre ? "Editar gasto" : "Nuevo gasto"}</legend>
          {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
          <div className='campo'>
            <label htmlFor="nombre">Nombre del Gasto</label>
            <input 
            id='nombre'
            type="text" 
            placeholder='Añade el nombre del gasto '
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            />
          </div>
          <div className='campo'>
            <label htmlFor="cantidad">Cantidad</label>
            <input 
            id='cantidad'
            type="number" 
            placeholder='Añade la cantidad '
            value={cantidad}
            onChange={e => setCantidad(Number(e.target.value))}            
            />
          </div>
          <div className='campo'>
            <label htmlFor="categoria">Categoria</label>
            <select  id="categoria"
            value={categoria}
            onChange={e => setCategoria((e.target.value))}              
            >
              <option value="">--Seleccione Categoria--</option>
              <option value="casa">Casa</option>
              <option value="ahorro">Ahorro</option>
              <option value="comida">Comida</option>
              <option value="gastos">Gastos Varios</option>
              <option value="ocio">Ocio</option>
              <option value="salud">Salud</option>
              <option value="suscripciones">Suscripciones</option>

            </select>

            <input 
            type="submit" 
            value={gastoEditar.nombre ? "Guardar" : "Nuevo gasto"}
            />

          </div>

        </form>

    </div>
  )
}

export default Modal
