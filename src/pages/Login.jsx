import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/UI/Inputs/Input.jsx";
import Button from "../components/UI/Buttons/Button.jsx";
import { AuthContext } from "../context/index.js";

const Login = () => {
  let navigate = useNavigate();
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = event => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
    navigate("/posts");
  };

  return (
    <div className="container container--padding-top container--padding-bottom">
      <div className="content">
        <h1>Страница для логина</h1>
        <form onSubmit={login}>
          <Input type="text" placeholder="Введите логин" />
          <Input type="password" placeholder="Введите пароль" />
          <Button>Войти</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;