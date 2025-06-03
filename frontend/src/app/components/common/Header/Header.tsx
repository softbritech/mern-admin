import './Header.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons/faLocationDot";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faTiktok} from "@fortawesome/free-brands-svg-icons/faTiktok";
import {faYoutube} from "@fortawesome/free-brands-svg-icons/faYoutube";
import {Suspense} from "react";
import Spinner from "../Spinner/Spinner.tsx";
import {Page} from "../../../../features/pages/types.tsx";
import {usePages} from "../../../../features/pages/hooks.tsx";
import {useScrolled} from "../../../hooks/useScrolled.tsx";
const Header = ({handleToggle}) => {

    const {pages, pagesIsLoading} = usePages();
    const  isScrolled  = useScrolled();

    return (
        <header className={isScrolled ? 'isActive' : ''}>
            <div className="header-wrapper">
                <div className="header-wrapper__top hidden lg:block bg-dark-grey px-5">
                    <div className="container mx-auto">
                        <div className="flex justify-between">
                            <ul className="header-wrapper__info flex items-center py-3.5 pe-6">
                                <li className="pe-4 flex items-center">
                                    <FontAwesomeIcon icon={faLocationDot}/>
                                    <span className="ms-1 font-[300]">
                                        Address: 4578 Marmora Road, Glasgow, D04 89GR
                                   </span>
                                </li>
                                <li className="ps-4 flex items-center">
                                    <a href="tel:">
                                        <FontAwesomeIcon icon={faPhone}/>
                                        <span className="ms-1 font-[300]">(800) 123-0045</span>
                                    </a>
                                </li>
                            </ul>
                            <ul className="header-wrapper__socials flex items-center">
                                <li className="px-2 mt-1.4">
                                    <a href=""><FontAwesomeIcon icon={faInstagram}/></a>
                                </li>
                                <li className="px-2 mt-1.4">
                                    <a href=""><FontAwesomeIcon icon={faFacebook}/></a>
                                </li>
                                <li className="px-2 mt-1.4">
                                    <a href=""><FontAwesomeIcon icon={faTiktok}/></a>
                                </li>
                                <li className="px-2 mt-1.4">
                                    <a href=""><FontAwesomeIcon icon={faYoutube}/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="header-wrapper__bottom py-1 px-1 lg:py-7 lg:px-5">
                    <div className="container mx-auto">
                        <div className="flex items-center lg:justify-between">
                            <button type="button" onClick={handleToggle} className="header-hamburger__menu">
                                <span></span>
                            </button>
                            <a className="header-logo__site pe-6" href="/" title="site name">
                                <img src="/logo-site.webp" alt="logo site"/>
                            </a>
                            <ul className="header-menu__list hidden lg:flex items-center ps=6">
                                <Suspense fallback={<Spinner loading={pagesIsLoading}/>}>
                                    {pages.map((page: Page) => (
                                        <li className="mt-3.5 px-3.5 text-white" key={page._id}>
                                            <a className="font-[400]" href={page.slug}>{page.name}</a>
                                        </li>
                                    ))}
                                </Suspense>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header