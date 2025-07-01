import {Create,LayoutProps, SimpleForm, TextInput} from "react-admin";

const ConfigCreate: React.FC<LayoutProps> = (props) => {
    return (
        <Create title="Create a site config" {...props} redirect="show">
            <SimpleForm>
                <TextInput source="group"/>
                <TextInput multiline source="key"/>
                <TextInput multiline source="value" />
            </SimpleForm>
        </Create>
    )
}
export default ConfigCreate