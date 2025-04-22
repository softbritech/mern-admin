import {
    Menu,
    DashboardMenuItem,
    MenuItemLink,
} from 'react-admin';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PostIcon      from '@mui/icons-material/Book';

export default function MyMenu(props: any) {
    return (
        <Menu {...props}>
            {/* this will link to "/" (i.e. /admin/) and render your Dashboard */}
            <DashboardMenuItem leftIcon={<DashboardIcon />} />

            {/* and your normal resources */}
            <MenuItemLink
                to="posts"
                primaryText="Posts"
                leftIcon={<PostIcon />}
                onClick={() => props.onMenuClick?.()}
            />
        </Menu>
    );
}