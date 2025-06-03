import SecondHeading from "../../common/Heading/SecondHeading/SecondHeading.tsx";
import './AboutUs.scss';
import MainButton from "../../common/Button/MainButton.tsx";
const AboutUs = ({page}) => {
    return (
        <section className="about-us__section">
            <div className="about-us__wrapper py-18 lg:py-23">
                <div className="container mx-auto">
                    <div className="flex items-center flex-wrap justify-between">
                        <div className="about-us__content w-full lg:w-1/2 px-6 mb-12 lg:mb-0">
                            <SecondHeading
                                className="second-title second-title-black font-[700]"
                                title="About us"
                            />
                            <div className="about-us__description mt-5 lg:mt-12">
                                <h3>{page.description}</h3>
                                <p className="mt-2.5">{page.short_description}</p>
                            </div>
                            <MainButton
                                text="Contact Us"
                                slug={page.slug}
                                className="main-button main-button-yellow mt-5 lg:mt-4 lg:mt-20"
                            />
                        </div>
                        <div className="about-us__image w-full lg:w-1/2 px-6">
                            <img src={`/${page.image}`} title={page.title}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutUs