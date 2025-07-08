import './BenefitsItem.scss';
const BenefitsItem = ({item}) => {
    return (
        <div className="benefit-item">
            <div className="benefit-item__title">
                {item.title}
            </div>
            <div className="benefit-item__content">
                {item.description}
            </div>
        </div>
    )
}
export default BenefitsItem