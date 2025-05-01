import * as React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
    type ShowProps,
} from 'react-admin';

const PageShow: React.FC<ShowProps> = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="short_description" />
        </SimpleShowLayout>
    </Show>
);

export default PageShow;