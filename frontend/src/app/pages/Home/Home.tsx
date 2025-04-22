import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchPosts} from "../../../store/actions/postActionTypes.tsx";

const Home = () => {
    const dispatch = useDispatch();

    const {posts, pending, error} = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (pending) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error loading posts!</div>;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-600">Tailwind is working! 🎉</h1>
            {posts.map(post => (
                <div key={post._id}>
                    <h4>{post.name}</h4>
                </div>
            ))}
        </div>
    )
}
export default Home