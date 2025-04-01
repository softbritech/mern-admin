// src/admin/layouts/MyAppBar.tsx
import { AppBar, TitlePortal } from 'react-admin';

const MyAppBar = () => (
    <AppBar>
        <TitlePortal />
        <span className="ml-4 font-bold text-white">My Admin Panel</span>
    </AppBar>
);

export default MyAppBar;