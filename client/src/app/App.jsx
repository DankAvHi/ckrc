import { Footer, Navigation, Header } from "../widgets";
import styles from "./App.module.css";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <>
            <Header />
            <Navigation />
            <Outlet />
            <Footer />
        </>
    );
}

export default App;
