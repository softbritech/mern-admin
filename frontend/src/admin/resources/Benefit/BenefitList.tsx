import {List, Datagrid, TextField, EditButton, DeleteButton, LayoutProps} from 'react-admin';

const BenefitList: React.FC<LayoutProps> = (props) => (
    <List {...props} title="Benefits List">
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="title" />
            <TextField  source="description" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);
export default BenefitList;
