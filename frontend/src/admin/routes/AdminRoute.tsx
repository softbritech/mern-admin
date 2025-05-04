import {Admin, Resource, ShowGuesser} from 'react-admin';
import AdminLayout from "../layouts/AdminLayout.tsx";
import Dashboard from "../pages/Dashboard.tsx";
import PostShow from "../resources/Post/PostShow.tsx";
import PostList from "../resources/Post/PostList.tsx";
import PageShow from "../resources/Page/PageShow.tsx";
import PageList from "../resources/Page/PageList.tsx";
import {dataProvider} from "../providers";
import PostCreate from "../resources/Post/PostCreate.tsx";
import PostEdit from "../resources/Post/PostEdit.tsx";


const AdminRoute: FC = () => {
    return (
        <Admin dashboard={Dashboard} basename="/admin"  layout={AdminLayout} dataProvider={dataProvider}>
            <Resource name="posts" show={PostShow} list={PostList} create={PostCreate} edit={PostEdit}/>
            <Resource name="pages" show={PageShow} list={PageList} />
        </Admin>
    )
};

export default AdminRoute;