import {Create, ImageField, ImageInput, LayoutProps, SimpleForm, TextInput} from "react-admin";

const PageCreate: React.FC<LayoutProps> = (props) => {
    return (
        <Create title="Create a Page" {...props} redirect="show">
            <SimpleForm>
                <TextInput source="name"/>
                <TextInput multiline source="description"/>
                <TextInput multiline source="short_description" />
                <ImageInput source="image" label="Image" accept="image/*">
                    <ImageField source="src" title="title" />
                </ImageInput>
            </SimpleForm>
        </Create>
    )
}
export default PageCreate