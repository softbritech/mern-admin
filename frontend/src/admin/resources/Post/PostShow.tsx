import * as React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
    type ShowProps, DateField,
} from 'react-admin';

const PostShow: React.FC<ShowProps> = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField label="name" source="name" />
            <TextField label="description" source="description" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <TextField source="id" />
        </SimpleShowLayout>
    </Show>
);

export default PostShow;