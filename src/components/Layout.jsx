import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { NavigationPanel } from "./NavigationPanel/NavigationPanel";

const Layout = () => {
	return (
		<>
			<Header></Header>
			<main style={{position:"absolute", top:"55px" , width:"100vw" , padding:"10px"}}>
				<Outlet></Outlet>
			</main>
			<NavigationPanel></NavigationPanel>
		</>
	);
};

export { Layout };
