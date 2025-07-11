import './BenefitsItem.scss';
const BenefitsItem = ({item}) => {
    return (
        <div className="benefit-item text-center">
            <div className="benefit-item__title">
                <h2 className="font-[700]">{item.title}</h2>
            </div>
            <div className="benefit-item__content">
                <p className="font-[400] mt-2.5">{item.description}</p>
            </div>
        </div>
    )
}
export default BenefitsItem