import {Admin, Resource} from 'react-admin';
import AdminLayout from "../layouts/AdminLayout.tsx";
import PostList from "../resources/PostList.tsx";
import dataProvider from "../providers/dataProvider.tsx";
import PostShow from "../resources/PostShow.tsx";
import Dashboard from "./Dashboard.tsx";


const AdminApp = () => {

    return (

    <Admin dashboard={Dashboard} basename="/admin"  layout={AdminLayout} dataProvider={dataProvider}>
        <Resource name="posts" show={PostShow} list={PostList} />
    </Admin>
    )
};

export default AdminApp;