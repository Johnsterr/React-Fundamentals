import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbar__links}>
        <Link className={classes.navbar__link} to="/">Главная страница</Link>
        <Link className={classes.navbar__link} to="/posts">Посты</Link>
        <Link className={classes.navbar__link} to="/about">О сайте</Link>
      </div>
    </div>
  );
};

export default Navbar;