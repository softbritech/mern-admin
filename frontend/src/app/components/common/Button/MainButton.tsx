import './MainButton.scss'
const MainButton  = ({slug, text, className = ''}) => {
    return (
        <a className={`${className}`} href={`${slug}`} title={text}>{text}</a>
    )
}
export default MainButton