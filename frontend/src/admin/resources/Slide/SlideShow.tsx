import {Show, ShowProps, SimpleShowLayout, TextField} from "react-admin";

const SlideShow: React.FC<ShowProps> = (props) => {
    return (
        <Show {...props}>
            <SimpleShowLayout>
                <TextField source="id" />
                <TextField source="title" />
                <TextField source="description" />
            </SimpleShowLayout>
        </Show>
    )
}
export default SlideShow