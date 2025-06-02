import {Edit, LayoutProps, SimpleForm, TextInput} from "react-admin";

const PageEdit: React.FC<LayoutProps> = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="name" />
                <TextInput multiline source="description" />
                <TextInput multiline source="short_description" />

            </SimpleForm>
        </Edit>
    )
}
export default PageEdit