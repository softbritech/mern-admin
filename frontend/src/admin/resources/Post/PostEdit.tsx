import {Edit, LayoutProps, SimpleForm, TextInput} from "react-admin";

const PostEdit: React.FC<LayoutProps> = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="name" />
                <TextInput multiline source="description" />
            </SimpleForm>
        </Edit>
    )
}
export default PostEdit