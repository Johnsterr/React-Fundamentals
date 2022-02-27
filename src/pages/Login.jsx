import React from "react";
import Input from "../components/UI/Inputs/Input.jsx";
import Button from "../components/UI/Buttons/Button.jsx";

const Login = () => {
  return (
    <div className="container container--padding-top container--padding-bottom">
      <div className="content">
        <h1>Страница для логина</h1>
        <form>
          <Input type="text" placeholder="Введите логин" />
          <Input type="password" placeholder="Введите пароль" />
          <Button>Войти</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;