import {Create, ImageField, ImageInput, LayoutProps, SimpleForm, TextInput} from "react-admin";

const PostCreate: React.FC<LayoutProps> = (props) => {
    return (
        <Create title="Create a Post" {...props} redirect="show">
            <SimpleForm>
                <TextInput source="name"/>
                <TextInput multiline source="description"/>
                <TextInput multiline source="author"/>
                <ImageInput source="image" label="Image" accept="image/*">
                    <ImageField source="src" title="title" />
                </ImageInput>
            </SimpleForm>
        </Create>
    )
}
export default PostCreate