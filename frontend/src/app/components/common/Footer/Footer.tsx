import './Footer.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faTiktok} from "@fortawesome/free-brands-svg-icons/faTiktok";
import {faYoutube} from "@fortawesome/free-brands-svg-icons/faYoutube";
import {useConfig} from "../../../../features/config/hooks.tsx";

const Footer = () => {
    const {config, configIsLoading} = useConfig();

    return (
        <footer>
            <div className="footer-wrapper py-4">
                <div className="container mx-auto">
                    <div className="flex justify-between">
                        <div className="footer-wrapper__copyright">
                            <p className="px-3.5">{config.copyright}</p>
                        </div>
                        <ul className="footer-wrapper__socials flex items-center">
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

        </footer>
    )
}
export default Footer