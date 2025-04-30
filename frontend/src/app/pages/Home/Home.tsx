import {Suspense} from "react";
import Spinner from "../../components/common/Spinner/Spinner.tsx";
import {usePosts} from "../../../features/posts/hooks.tsx";
import {Post} from "../../../features/posts/types.tsx";
import {usePages} from "../../../features/pages/hooks.tsx";
import {Page} from "../../../features/pages/types.tsx";
import MainSlider from "../../components/includes/Gallery/MainSlider/MainSlider.tsx";


const Home = () => {
    const {posts, loading} = usePosts();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <h1 className="text-4xl">Tailwind is working! 🎉</h1>
            {/*<MainSlider/>*/}
            <Suspense fallback={<Spinner loading={loading}/>}>
                {posts.map((post: Post) => (
                    <div key={post._id}>
                        <h4>{post.name}</h4>
                    </div>
                ))}
            </Suspense>

        </div>
    )
}
export default Home