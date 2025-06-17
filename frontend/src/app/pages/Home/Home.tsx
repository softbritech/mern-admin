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


const Home = () => {
    const {posts, loading} = usePosts();
    const {slides, slideIsLoading} = useSlides();
    const {pages, pagesIsLoading} = usePages()
    const {services, serviceIsLoading} = useServices()

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
            <section className="services-section">
                <div className="services-section__wrapper">
                    <div className="container mx-auto">
                        <SecondHeading
                            className="second-title text-center second-title-black font-[700]"
                            title="Our Services"
                        />
                        <ErrorBoundary fallback={<div>Something went wrong</div>}>
                            <Suspense fallback={<Spinner loading={serviceIsLoading}/>}>
                                <div className="services-list mt-10 lg:mt-15 flex flex-wrap xl:flex-nowrap justify-center">
                                    {services.map((service: Service) => (
                                        <div className="md:w-2/5 xl:w-1/2 sm:w-full px-5">
                                            <ServiceItem key={service._id} service={service}/>
                                        </div>
                                    ))}
                                </div>
                            </Suspense>
                        </ErrorBoundary>
                    </div>
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
        </>
    )
}
export default Home