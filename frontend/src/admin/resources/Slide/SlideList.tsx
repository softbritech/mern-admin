import {Datagrid, DeleteButton, EditButton, LayoutProps, List, TextField} from "react-admin";

const SlideList: React.FC<LayoutProps> = (props) => {
    return (
            <List {...props} title="Slide List">
            <Datagrid rowClick="show">
                <TextField source="id" />
                <TextField source="title" />
                <TextField source="description" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    )
}
export default SlideList