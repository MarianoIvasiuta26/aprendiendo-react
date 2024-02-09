import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../context/Context';

const Login = () => {
  const {loguearme} = useContext(Context);
  const navegacion = useNavigate();
  const login = () => {
    navegacion('/', {replace:true});
    loguearme('mariano')
  }

  return (
    <div className='login'>
        <h3>Vive el país:</h3>
        <div>
          <span>Referencia:</span>
          <input type="text" placeholder='Referencia de tu billete'/>
          <button onClick={login}>Login</button>
        </div>
    </div>
  )
}

export default Login