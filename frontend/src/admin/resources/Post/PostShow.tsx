import * as React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
    BooleanField,
    type ShowProps,
} from 'react-admin';

const PostShow: React.FC<ShowProps> = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <BooleanField source="change" />
            <BooleanField source="done" />
        </SimpleShowLayout>
    </Show>
);

export default PostShow;