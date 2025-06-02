import {Create, LayoutProps, SimpleForm, TextInput} from "react-admin";

const SlideCreate:React<LayoutProps> = (props) => {
    return (
        <Create title="Create a Slide" {...props} redirect="show">
            <SimpleForm>
                <TextInput source="title"/>
                <TextInput multiline source="description"/>
            </SimpleForm>
        </Create>
    )
}
export default SlideCreate