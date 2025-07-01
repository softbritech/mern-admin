import {Outlet} from "react-router";
import Header from "../components/common/Header/Header.tsx";
import Sidebar from "../components/common/Sidebar/Sidebar.tsx";
import {useDispatch, useSelector} from "react-redux";
import {sidebarOpen} from "../../features/ui/selectors.tsx";
import {toggleSidebar} from "../../features/ui/actions.tsx";
import Footer from "../components/common/Footer/Footer.tsx";

const MainLayout = () => {

    const isOpen = useSelector(sidebarOpen)
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleSidebar());
    };
    return (
        <>
            <Header handleToggle={handleToggle}/>
            <Sidebar isActive={isOpen}/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}
export default MainLayout