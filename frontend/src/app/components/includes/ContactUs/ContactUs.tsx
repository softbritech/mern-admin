import SecondHeading from "../../common/Heading/SecondHeading/SecondHeading.tsx";
import './ContactUs.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons/faLocationDot";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";
import {useConfig} from "../../../../features/config/hooks.tsx";
const ContactUs = () => {
    const {config, configIsLoading} = useConfig();

    return (
        <section className="contact-us__form">
            <div className="contact-us__wrapper py-18 lg:py-23">
                <div className="container mx-auto">
                    <div className="flex items-center flex-wrap justify-between">
                        <div className="contact-us__content w-full lg:w-1/3 px-6 mb-12 lg:mb-0">
                            <SecondHeading
                                className="second-title second-title-black font-[700]"
                                title="Contact Details"
                            />
                            <div className="contact-info__details">
                                <ul className="mt-3.5">
                                    <li className="pe-4  font-[300] ">
                                        Address:
                                        <span className="ms-1">
                                            {config.address}
                                         </span>

                                    </li>
                                    <li className="ps-4  font-[300]">
                                        <a href={`tel:${config.phone}`}>
                                            PHONES:
                                            <span className="ms-1">
                                                {config.phone}
                                            </span>

                                        </a>
                                    </li>
                                    <li className="ps-4  font-[300 ">
                                        <a href={`tel:${config.phone}`}>
                                            WE ARE OPEN:
                                            <span className="ms-1">

                                            </span>

                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="contact-us__form w-full lg:w-2/3 px-6">
                            <SecondHeading
                                className="second-title second-title-black font-[700]"
                                title="Get in Touch"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContactUs