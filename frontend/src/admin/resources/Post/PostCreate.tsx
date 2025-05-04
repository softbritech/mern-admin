import {Create, LayoutProps, SimpleForm, TextInput} from "react-admin";

const PostCreate: React.FC<LayoutProps> = (props) => {
    return (
        <Create title="Create a Post" {...props} redirect="show">
            <SimpleForm>
                <TextInput source="name"/>
                <TextInput multiline source="description"/>
            </SimpleForm>
        </Create>
    )
}
export default PostCreate