import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { NavigationPanel } from "./NavigationPanel/NavigationPanel";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <NavigationPanel></NavigationPanel>
    </>
  );
};

export { Layout };
