import {Admin, Resource} from 'react-admin';
import AdminLayout from "../layouts/AdminLayout.tsx";
import Dashboard from "../pages/Dashboard.tsx";
import {dataProvider} from "../providers";
import {FC} from "react";
import {PageList, PostShow, PostList, PostCreate, PostEdit, PageShow, SlideShow, SlideList, SlideEdit, PageEdit, PageCreate} from "../resources";


const AdminRoute: FC = () => {
    return (
        <Admin dashboard={Dashboard} basename="/admin"  layout={AdminLayout} dataProvider={dataProvider}>
            <Resource name="posts" show={PostShow} list={PostList} create={PostCreate} edit={PostEdit}/>
            <Resource name="pages" show={PageShow} list={PageList} create={PageCreate} edit={PageEdit}/>
            <Resource name="slides" show={SlideShow} list={SlideList} edit={SlideEdit}/>

        </Admin>
    )
};

export default AdminRoute;