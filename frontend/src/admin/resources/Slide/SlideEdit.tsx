import {Edit, LayoutProps, SimpleForm, TextInput} from "react-admin";

const SlideEdit: React.FC<LayoutProps> = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="slug" />
                <TextInput source="title" />
                <TextInput multiline source="description" />
                <TextInput source="image" />
            </SimpleForm>
        </Edit>
    )
}
export default SlideEdit