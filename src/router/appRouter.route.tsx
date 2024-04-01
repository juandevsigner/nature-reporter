import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ROUTER_SCHEMA } from "./router.schema";
import { Footer, NavBar } from "src/components";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/diarios-de-la-naturaleza" element={<Navigate to="/" />} />
        {ROUTER_SCHEMA.map(({ component: Component, path }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
