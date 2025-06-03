import {Suspense} from "react";
import Spinner from "../../components/common/Spinner/Spinner.tsx";
import {usePosts} from "../../../features/posts/hooks.tsx";
import {Post} from "../../../features/posts/types.tsx";
import MainSlider from "../../components/includes/Gallery/MainSlider/MainSlider.tsx";
import {useSlides} from "../../../features/slides/hooks.tsx";
import {ErrorBoundary} from "react-error-boundary";
import {usePages} from "../../../features/pages/hooks.tsx";
import AboutUs from "../../components/includes/AboutUs/AboutUs.tsx";


const Home = () => {
    const {posts, loading} = usePosts();
    const {slides, slideIsLoading} = useSlides();
    const {pages, pagesIsLoading} = usePages()

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