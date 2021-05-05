import React, { useState } from 'react';
import './Login.css'

import Title from '../Components/Title'
import Label from '../Components/Label'
import Input from '../Components/Input'


const Login = () => {
  const [ user, setUser ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ passwordError, setPasswordError ] = useState(false);
  const [ isLogin, setIsLogin ] = useState(false);

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
    if (param.user.length > 0 && param.password.length > 0){
      if (param.user === 'Miriam' && param.password === '123456') {
        const { user, password } = param;
        let userAndpass = { user, password };
        let account = JSON.stringify(userAndpass);
        localStorage.setItem('acount', account);
        setIsLogin(true)
      } else {
        setIsLogin(false);
      }
    } else {
      setIsLogin(false)
    }
  }

  function handleSubmit(){
    let account = { user, password }
    // console.log('account:', account);
    if (account){
      ifMatch(account)
    }
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
