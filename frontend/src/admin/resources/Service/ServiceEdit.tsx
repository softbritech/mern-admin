import {Edit, LayoutProps, SimpleForm, TextInput} from "react-admin";

const ServiceEdit: React.FC<LayoutProps> = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="title" />
                <TextInput multiline source="description" />
            </SimpleForm>
        </Edit>
    )
}
export default ServiceEdit