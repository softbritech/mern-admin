import * as React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
    type ShowProps, DateField,
} from 'react-admin';

const ServiceShow: React.FC<ShowProps> = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField label="title" source="title" />
            <TextField label="description" source="description" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <TextField source="id" />
        </SimpleShowLayout>
    </Show>
);

export default ServiceShow;