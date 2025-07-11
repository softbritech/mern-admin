import './Home.scss';
import {Suspense} from "react";
import Spinner from "../../components/common/Spinner/Spinner.tsx";
import {usePosts} from "../../../features/posts/hooks.tsx";
import {Post} from "../../../features/posts/types.tsx";
import MainSlider from "../../components/includes/Gallery/MainSlider/MainSlider.tsx";
import {useSlides} from "../../../features/slides/hooks.tsx";
import {ErrorBoundary} from "react-error-boundary";
import {usePages} from "../../../features/pages/hooks.tsx";
import AboutUs from "../../components/includes/AboutUs/AboutUs.tsx";
import SecondHeading from "../../components/common/Heading/SecondHeading/SecondHeading.tsx";
import {useServices} from "../../../features/services/hooks.tsx";
import {Service} from "../../../features/services/types.tsx";
import ServiceItem from "../../components/includes/Services/ServiceItem/ServiceItem.tsx";
import {useConfig} from "../../../features/config/hooks.tsx";
import BenefitsItem from "../../components/includes/Benefits/BenefitsItem.tsx";
import {useBenefits} from "../../../features/benefits/hooks.tsx";
import {Benefit} from "../../../features/benefits/types.tsx";
import MainHeading from "../../components/common/Heading/MainHeading/MainHeading.tsx";
import MainButton from "../../components/common/Button/MainButton.tsx";


const Home = () => {
    const {posts, loading} = usePosts();
    const {slides, slideIsLoading} = useSlides();
    const {pages, pagesIsLoading} = usePages();
    const {services, serviceIsLoading} = useServices();
    const {benefits, benefitsIsLoading} = useBenefits();

    const {config, configIsLoading} = useConfig();

    const aboutPage = pages.find((page) => page.slug === '/about-us');

    return (
        <>
            <section className="hero-section">
                <div className="hero-section__wrapper">
                    <ErrorBoundary fallback={<div>Something went wrong</div>}>
                        <Suspense fallback={<Spinner loading={slideIsLoading}/>}>
                            <MainSlider items={slides}/>
                        </Suspense>
                    </ErrorBoundary>
                </div>
            </section>
            {aboutPage && (
                <Suspense fallback={<Spinner loading={pagesIsLoading}/>}>
                    <AboutUs page={aboutPage}/>
                </Suspense>
            )}
            <section className="benefits-section">
                <div className="benefits-section__wrapper py-15 lg:py-25">
                    <div className="container mx-auto">
                        <div className="benefits-list flex justify-between flex-wrap lg:flex-nowrap">
                            {benefits.map((item: Benefit) => (
                                <div key={item._id} className="w-full sm:w-1/2 l px-6 mb-0 md:mb-12">
                                    <BenefitsItem  item={item}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="services-section">
                <div className="services-section__wrapper py-25">
                    <div className="container mx-auto">
                        <SecondHeading
                            className="second-title text-center second-title-black font-[700]"
                            title="Our Services"
                        />
                        <ErrorBoundary fallback={<div>Something went wrong</div>}>
                            <Suspense fallback={<Spinner loading={serviceIsLoading}/>}>
                                <div className="services-list mt-10 lg:mt-15 flex flex-wrap lg:flex-nowrap items-center justify-center">
                                    {services.map((service: Service) => (
                                        <div key={service._id} className="md:w-2/5 lg:w-1/2 w-full px-5">
                                            <ServiceItem service={service}/>
                                        </div>
                                    ))}
                                </div>
                            </Suspense>
                        </ErrorBoundary>
                    </div>
                </div>
            </section>
            <section className="contact-us__section">
                <div className="contact-us__wrapper text-center px-10 lg:px-0 py-15 lg:py-25">
                    <SecondHeading
                        className="second-title text-center second-title-white font-[700]"
                        title={`${config.contact_us}`}
                    />
                    <MainButton
                        text="Contact Us"
                        slug="/contact"
                        className="main-button main-button-white mt-4 lg:mt-15"
                    />
                </div>
            </section>
            <section className="articles-section">
                <div className="articles-section__wrapper">
                    <ErrorBoundary fallback={<div>Something went wrong</div>}>
                        <Suspense fallback={<Spinner loading={loading}/>}>
                            {posts.map((post: Post) => (
                                <div key={post._id}>
                                    <h4>{post.name}</h4>
                                </div>
                            ))}
                        </Suspense>
                    </ErrorBoundary>
                </div>
            </section>
            <section className="map-section">
                <iframe
                    src={`${config.iframe}`}
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </section>
        </>
    )
}
export default Home