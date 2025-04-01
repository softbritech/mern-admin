import {Layout} from "react-admin";
import MyAppBar from "../components/Navbar/Navbar.tsx";
import MyMenu from "../components/Menu/Menu.tsx";

const AdminLayout = ({props}) => {
    return (
        <Layout {...props} appBar={MyAppBar} menu={MyMenu} />
    )
}
export default AdminLayout