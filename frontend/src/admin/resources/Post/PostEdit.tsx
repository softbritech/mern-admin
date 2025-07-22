import {Edit, ImageField, ImageInput, LayoutProps, SimpleForm, TextInput} from "react-admin";

const PostEdit: React.FC<LayoutProps> = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="name" />
                <TextInput multiline source="description" />
                <TextInput multiline source="author"/>
                <ImageInput
                    source="image"
                    label="Image"
                    accept="image/jpeg, image/png, image/jpg, image/webp"
                >
                    <ImageField source="src" title="title" />
                </ImageInput>
            </SimpleForm>
        </Edit>
    )
}
export default PostEdit