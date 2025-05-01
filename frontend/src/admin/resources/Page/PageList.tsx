import {List, Datagrid, TextField, EditButton, DeleteButton, LayoutProps} from 'react-admin';

const PageList: React.FC<LayoutProps> = (props) => (
    <List {...props} title="Page List">
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);
export default PageList;
