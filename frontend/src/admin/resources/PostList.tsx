import {List, Datagrid, TextField, EditButton, DeleteButton} from 'react-admin';

const PostList = (props) => (
    <List {...props} title="Post List">
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <EditButton basepath='/posts'/>
            <DeleteButton basepath='/posts'/>
        </Datagrid>
    </List>
);
export default PostList;
