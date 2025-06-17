import {Create, LayoutProps, SimpleForm, TextInput} from "react-admin";

const ServiceCreate: React.FC<LayoutProps> = (props) => {
    return (
        <Create title="Create a Post" {...props} redirect="show">
            <SimpleForm>
                <TextInput source="title"/>
                <TextInput multiline source="description"/>
            </SimpleForm>
        </Create>
    )
}
export default ServiceCreate