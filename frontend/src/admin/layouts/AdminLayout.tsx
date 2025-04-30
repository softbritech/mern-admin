import {Layout, LayoutProps} from "react-admin";
import MyAppBar from "../components/Navbar/Navbar.tsx";
import MyMenu from "../components/Menu/Menu.tsx";

const AdminLayout: React.FC<LayoutProps> = (props) => {
    return (
        <Layout {...props} appBar={MyAppBar} menu={MyMenu} />
    )
}
export default AdminLayout