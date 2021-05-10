import React, { useState, useEffect } from 'react';
import './Login.css'

import Title from '../Components/Title'
import Label from '../Components/Label'
import axios from 'axios';

const initialInputs = {
  email:'',
  password:''
}

const Login = () => {
  // --  infromación de usuario y contraseña
  const [ inputData, setInputData ] = useState(initialInputs);
  // ---para obtener valores de los inputs
  function handleChange(e){
    const { id, value } =e.target
    const newObject = ({... inputData, [id]: value})
    console.log(newObject) //entra correo y password
    setInputData(newObject)
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log('submit')
    axios.post('http://localhost:8080/auth/', {
      email: inputData.email,
      password: inputData.password
    }).then(response => {
      console.log('axios post response:', response)
      if (response.data.status = 200){
        console.log('axios token access:', response.data)
        localStorage.setItem('access', JSON.stringify(response.data))
      }else {
        console.log('error, no pude guardar token')
      }
      authHeader()
    })
  }


  // --- peticion get a la API, devuelve lo que hay en la siguiente ruta
  function authHeader() {
    const userToken = JSON.parse(localStorage.getItem('access'));
    console.log('userToken.token:', userToken.token);
    if (userToken)
    axios.get('http://localhost:8080/users/', { headers: { Authorization: `Bearer ${userToken.token}`}})
    .then(response =>{
      console.log('esta es la respuesta a get users' , response)
      console.log('esta es la respuesta con todos los usuarios' , response.data)
      return response.data;
    }).then(response=> {
      console.log('estos son los usuarios' , response)
      if (response.status = 200){
        alert ('estas logueado')
        window.location.href='./orders';
      } else {
        alert (' el usuario o o contraseña son incorrectos')
      }
    }).catch (error =>{
      console.log(error)
    })
  }

  return (
    <div className= 'login-container'>
      <form onSubmit={handleSubmit}>
      <Title text= 'Burger Queen'/>
        <Label text='Usuario'/>
        <input type='text' id='email' value={inputData.email} onChange = {handleChange}/>
        <Label text= 'Contraseña' />
        <input type='password' id='password' value={inputData.password} onChange = {handleChange}/>
        <div>
        <button type= 'submit' > Ingresar </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
