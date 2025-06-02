import './Sidebar.scss'
import {usePages} from "../../../../features/pages/hooks.tsx";
import {Link} from "react-router";
const Sidebar = ({isActive}) => {
    const {pages} = usePages();

    return (
        <nav className={`${isActive ? 'isActive' : 'false'}`}>
            <div className="container">
                <div className="navbar-wrapper">
                    <div className="navbar-header__close">
                    </div>
                    <ul className="navbar-links mt-5">
                        {pages?.map(page => (
                            <li className="py-3.5 px-4" key={page._id}>
                                <Link className="font-[400]" to={page.slug} title={page.name}>{page.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Sidebar