import {List, Datagrid, TextField, EditButton, DeleteButton, LayoutProps} from 'react-admin';

const PostList: React.FC<LayoutProps> = (props) => (
    <List {...props} title="Post List">
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);
export default PostList;
