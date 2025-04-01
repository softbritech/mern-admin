import { List, Datagrid, TextField, EmailField, EditButton } from 'react-admin';

const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <EditButton />
        </Datagrid>
    </List>
);
export default UserList;