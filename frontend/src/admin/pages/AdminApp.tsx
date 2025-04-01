import {Admin, Resource} from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import AdminLayout from "../layouts/AdminLayout.tsx";
import UserList from "../resources/UserList.tsx";

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const dataProvider = simpleRestProvider('http://localhost:3000/');

const AdminApp = () => (
    <Admin basename="/admin" history={history}  layout={AdminLayout} dataProvider={dataProvider}>
        <Resource name="users" list={UserList} />
    </Admin>
);

export default AdminApp;