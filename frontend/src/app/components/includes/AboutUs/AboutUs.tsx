
const AboutUs = ({page}) => {
    return (
        <section className="about-us__section">
            <div className="about-us__wrapper">
                    <h2>{page.name}</h2>
                    <h3>{page.description}</h3>
                    <p>{page.short_description}</p>
            </div>
        </section>
    )
}
export default AboutUs