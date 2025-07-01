import {Edit, ImageField, ImageInput, LayoutProps, SimpleForm, TextInput} from "react-admin";

const ConfigEdit: React.FC<LayoutProps> = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="group" />
                <TextInput multiline source="key" />
                <TextInput multiline source="value" />
                <TextInput multiline source="lang" />
            </SimpleForm>
        </Edit>
    )
}
export default ConfigEdit