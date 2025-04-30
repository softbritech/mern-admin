import {Outlet} from "react-router";
import Header from "../components/common/Header/Header.tsx";

const MainLayout = () => {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}
export default MainLayout