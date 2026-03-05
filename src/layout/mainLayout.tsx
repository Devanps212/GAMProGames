import { Outlet } from "react-router-dom";
import Header from "../components/layout/header/header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
