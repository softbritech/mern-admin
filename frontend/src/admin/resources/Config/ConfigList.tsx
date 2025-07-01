import {List, Datagrid, TextField, EditButton, DeleteButton, LayoutProps} from 'react-admin';

const ConfigList: React.FC<LayoutProps> = (props) => (
    <List {...props} title="Config List">
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="group" />
            <TextField source="key" />
            <TextField
                source="value"
                sx={{
                    maxWidth: 300,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    display: 'block',
                }}
            />
            <TextField source="lang" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);
export default ConfigList;
