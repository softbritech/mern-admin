import {Admin, Resource} from 'react-admin';
import AdminLayout from "../layouts/AdminLayout.tsx";
import Dashboard from "../pages/Dashboard.tsx";
import {dataProvider} from "../providers";
import {FC} from "react";
import {
    PageList,
    PostShow,
    PostList,
    PostCreate,
    PostEdit,
    PageShow,
    SlideShow,
    SlideList,
    SlideEdit,
    PageEdit,
    PageCreate,
    ServiceEdit, ServiceCreate, ServiceShow, ConfigList, ConfigShow, ConfigEdit, ServiceList, ConfigCreate
} from "../resources";



const AdminRoute: FC = () => {
    return (
        <Admin dashboard={Dashboard} basename="/admin"  layout={AdminLayout} dataProvider={dataProvider}>
            <Resource name="posts" show={PostShow} list={PostList} create={PostCreate} edit={PostEdit}/>
            <Resource name="pages" show={PageShow} list={PageList} create={PageCreate} edit={PageEdit}/>
            <Resource name="slides" show={SlideShow} list={SlideList} edit={SlideEdit}/>
            <Resource name="services" show={ServiceShow} list={ServiceList} edit={ServiceEdit} create={ServiceCreate}/>
            <Resource name="config" show={ConfigShow} list={ConfigList} edit={ConfigEdit} create={ConfigCreate}/>
        </Admin>
    )
};

export default AdminRoute;