import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router/index.js";
import { AuthContext } from "../context/index.js";

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    isAuth
      ? <Routes>
        {privateRoutes.map(route =>
          <Route key={route.path} path={route.path} element={route.element} />,
        )}
      </Routes>
      : <Routes>
        {publicRoutes.map(route =>
          <Route key={route.path} path={route.path} element={route.element} />,
        )}
      </Routes>
  );
};

export default AppRouter;