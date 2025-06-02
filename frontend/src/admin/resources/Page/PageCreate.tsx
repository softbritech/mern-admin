import {Create, LayoutProps, SimpleForm, TextInput} from "react-admin";

const PageCreate: React.FC<LayoutProps> = (props) => {
    return (
        <Create title="Create a Page" {...props} redirect="show">
            <SimpleForm>
                <TextInput source="name"/>
                <TextInput multiline source="description"/>
            </SimpleForm>
        </Create>
    )
}
export default PageCreate