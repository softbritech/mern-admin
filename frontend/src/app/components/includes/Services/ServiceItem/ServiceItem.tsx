import './ServiceItem.scss';
import {faTrowelBricks} from "@fortawesome/free-solid-svg-icons/faTrowelBricks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const ServiceItem = ({service}) => {
    return (
        <div className="service-item flex flex-col  lg:flex-row items-center start">
            <div className="service-item__icon ms-0 lg:ms-3 mb-8 lg:mb-12">
                <span className="flex items-center justify-center">
                    <FontAwesomeIcon icon={faTrowelBricks} />
                </span>
            </div>
            <div className="service-item__content ms-3 mb-12">
                <h2 className="service-item__title">
                    {service.title}
                </h2>
                <p className="mt-2.5 lg:mt-0">{service.description}</p>
            </div>
        </div>
    )
}
export default ServiceItem