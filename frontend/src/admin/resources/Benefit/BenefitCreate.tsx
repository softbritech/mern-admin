import {Create, LayoutProps, SimpleForm, TextInput} from "react-admin";

const BenefitCreate: React.FC<LayoutProps> = (props) => {
    return (
        <Create title="Create a Benefit" {...props} redirect="show">
            <SimpleForm>
                <TextInput source="title"/>
                <TextInput multiline source="description"/>
            </SimpleForm>
        </Create>
    )
}
export default BenefitCreate