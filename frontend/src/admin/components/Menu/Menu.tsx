import {
    Menu,
    DashboardMenuItem,
    MenuItemLink,
} from 'react-admin';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon      from '@mui/icons-material/Article';
import NoteAddIcon      from '@mui/icons-material/NoteAdd';

export default function MyMenu(props: any) {
    return (
        <Menu {...props}>
            <DashboardMenuItem leftIcon={<HomeIcon />} />

            <Menu.ResourceItems/>
                {/*// to="posts"*/}
                {/*// primaryText="Posts"*/}
                {/*// leftIcon={<ArticleIcon />}*/}
                {/*// onClick={() => props.onMenuClick?.()}*/}
            {/*/>*/}

            {/*<MenuItemLink*/}
            {/*    to="pages"*/}
            {/*    primaryText="Pages"*/}
            {/*    leftIcon={<NoteAddIcon />}*/}
            {/*    onClick={() => props.onMenuClick?.()}*/}
            {/*/>*/}
        </Menu>
    );
}