import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button.jsx";
import { useContext } from "react";
import { AuthContext } from "../../../context/index.js";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className={classes.navbar}>
      <div className={classes.navbar__links}>
        <Link className={classes.navbar__link} to="/">Главная страница</Link>
        <Link className={classes.navbar__link} to="/posts">Посты</Link>
        <Link className={classes.navbar__link} to="/about">О сайте</Link>
        <Button onClick={logout}>
          Выйти
        </Button>
      </div>
    </div>
  );
};

export default Navbar;