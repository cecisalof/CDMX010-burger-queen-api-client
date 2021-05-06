import React, { useState, useEffect } from 'react';
import './Login.css'

import axios from 'axios';
import Title from '../Components/Title'
import Label from '../Components/Label'
import Input from '../Components/Input'


const Login = () => {
  const [ user, setUser ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ passwordError, setPasswordError ] = useState(false);
  // const [ isLogin, setIsLogin ] = useState(true);

  function handleChange(name, value) {
    if (name == 'usuario') {
      setUser(value)
    } else {
      if(value.length < 6) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
        setPassword(value)
      }
    }
  }
  // console.log('usuario:', user)
  // console.log('password:', password)

  function ifMatch(param) {
    console.log(param);
    const { user , password } = param;
    console.log(user);
    axios.post('http://localhost:8080/auth/', {
      email: user,
      password: password
    }).then((response) => {
      console.log(response);
      localStorage.setItem('user', JSON.stringify(response.data));
      console.log(response.data);
      return response.data;
    })
    }

  function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('Tomando token desde local storage:', user);

    if (user)
    axios.post('http://localhost:8080/users',{
      header: user
    }).then(response =>{
      console.log(response);
        return response;
    })
  }



  function handleSubmit(){
    let account = { user, password }
    // console.log('account:', account);
    if (account){
      ifMatch(account)
    }
    authHeader()

  }

  return (
    <div className= 'login-container'>
      <div className='login-content'>
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
          placeholder: 'Ingrese su contraseña'
        }}
        handleChange={handleChange}
        param= {passwordError}
        />

        { passwordError &&
          <label className='label-error'>
            Contraseña invalida o incompleta
          </label>
        }
        <div className='submit-button-container'>
          <button onClick= { handleSubmit}>
            Ingresar
          </button>
        </div>
      </div>

    </div>
  );
};

export default Login;
