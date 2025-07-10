import * as React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
    type ShowProps,
} from 'react-admin';

const BenefitShow: React.FC<ShowProps> = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="description" />
        </SimpleShowLayout>
    </Show>
);

export default BenefitShow;