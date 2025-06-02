import './MainHeading.scss'

const MainHeading = ({className = '',  title, ...rest}) => {
    return (
        <div className="main-heading__section">
            <h1 className={`${className}`} {...rest}>{title}</h1>
        </div>
    )
}
export default MainHeading