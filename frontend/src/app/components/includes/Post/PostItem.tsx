import './PostItem.scss'
import { format } from "date-fns";

const PostItem = ({post}) => {

    const formattedDate = format(new Date(post.date), "MMM. dd, yyyy");

    return (
        <div className="post-item">
            <div className="post-item__image">
                <img src={`/${post.image}`} title={post.title}/>
            </div>
            <div className="post-item__content">
                <h3>{post.name}</h3>
                <div className="post-item__wrapper">
                    <div className="flex items-center">
                        <p>{formattedDate}</p>
                        <span>by {post.author}</span>
                    </div>
                    <p>
                        {post.description}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default PostItem