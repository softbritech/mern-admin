import './SecondHeading.scss';

const SecondHeading = ({className, title, ...rest}) => {
    return (
        <div className="second-heading__section">
            <h2 className={`${className}`} {...rest}>{title}</h2>
        </div>
    )
}
export default SecondHeading;