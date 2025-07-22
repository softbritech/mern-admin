import './PostItem.scss'
import { format } from "date-fns";

const PostItem = ({post}) => {

    const date = new Date(post.date);
    const isValidDate = !isNaN(date.getTime())
    const formattedDate = format(isValidDate ? date : new Date(), "MMM. dd, yyyy");

    return (
        <div className="post-item">
            <div className="post-item__image">
                <img src={`${post.image}`} title={post.title}/>
            </div>
            <div className="post-item__content mt-6">
                <h3 className="font-[400]">{post.name}</h3>
                <div className="post-item__wrapper mt-2.5">
                    <div className="flex items-center">
                        <span className="is-golden">{formattedDate}</span>
                        <span>by {post.author}</span>
                    </div>
                    <p className="post-item__description font-[300]">
                        {post.description}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default PostItem