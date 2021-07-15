import React, { useState } from 'react';

export default function Login({onLogin}){

  const [loginData, setLoginData] = useState({
    name: '',
    password: '',
  });

  const [error, setError] = useState(false)


  const handleChange = (e) => {
    const { name, value } = e.target;
    if(e.target.value === ' '){
      setError(true)
    } else {
      setError(false)
      setLoginData({
        ...loginData,
        [name]: value.trim()
      });
    }
  };


  function handleSubmit(e){
    e.preventDefault();
    
    if (!loginData.name || !loginData.password) {
      return;
    }

    onLogin(loginData)
  }
  

  return (
    <div className="login">
      <h2 className="login__header">Авторизация</h2>
      <form onSubmit={handleSubmit} className="login__form">
        <input type="text" name="name" onChange={handleChange} value={loginData.name || ''} className="login__input" placeholder="Ваше имя"></input>
        <input type="password" name="password" onChange={handleChange} value={loginData.password || ''} className="login__input" placeholder="Пароль"></input>
        <span className={error ? `error__visible`: `error__none`}>Нельзя вводить пробелы!</span>
        <button className="login__btn">Войти</button>
      </form>
    </div>
  );
}