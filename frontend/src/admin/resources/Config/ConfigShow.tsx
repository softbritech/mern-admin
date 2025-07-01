import * as React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
    type ShowProps,
} from 'react-admin';

const ConfigShow: React.FC<ShowProps> = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="group" />
            <TextField source="key" />
            <TextField source="value" />
        </SimpleShowLayout>
    </Show>
);

export default ConfigShow;