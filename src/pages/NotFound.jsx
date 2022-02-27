import classes from "../components/UI/Navbar/Navbar.module.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container container--padding-top container--padding-bottom">
      <div className="content">
        <h1 className="not-fount-title">Упс! Страница не найдена...</h1>
        <Link className={classes.navbar__link} to="/">Перейти на главную</Link>
      </div>
    </div>
  );
};

export default NotFound;