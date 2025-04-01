

// src/admin/layouts/MyMenu.tsx
import { Menu } from 'react-admin';

const MyMenu = () => (
    <Menu>
        <Menu.DashboardItem />
        <Menu.ResourceItem name="users" />
        {/* Add more resources here */}
    </Menu>
);

export default MyMenu;