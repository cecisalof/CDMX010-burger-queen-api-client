import React, { useState } from 'react';
import './Login.css'

import Title from '../Components/Title'
import Label from '../Components/Label'
import Input from '../Components/Input'


const Login = () => {
  const [ user, setUser ] = useState('');
  const [ password, setPassword ] = useState('');
  function handleChange(name, value) {
    if (name == 'usuario') {
      setUser(value)
    } else {
      setPassword(value)
    }
  }
  // console.log('usuario:', user)
  // console.log('password:', password)

  function handleSubmit(){
    let account = { user, password }
    console.log('account:', account);
  }

  return (
    <div className= 'loginContainer'>
      <Title text= 'Burger Queen'/>
      <Label text='Usuario'/>
      <Input
      attribute={{
        id:'usuario',
        name: 'usuario',
        type: 'text',
        placeholder: 'Ingrese su usuario'
      }}
      handleChange={handleChange}
      />
      <Label text= 'Contraseña' />
      <Input
      attribute={{
        id:'contraseña',
        name: 'contraseña',
        type: 'password',
        placeholder: 'Ingrese su usuario'
      }}
      handleChange={handleChange}
      />

      <button onClick= { handleSubmit}>
        Ingresar
        </button>

    </div>
  );
};

export default Login;
