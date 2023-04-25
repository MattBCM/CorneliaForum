import { Link } from "react-router-dom"

const Post = (props) => {

    return(
        <div className="Posts">
            <Link to={`/post/${props.id}`}><h1>{props.title}</h1></Link>
            <h2>{props.desc}</h2>
            <button className="upVote">{`🡅 ${props.upvote}`}</button>
            <button className="downVote">{`🡇 ${props.downvote}`}</button>
            <button className="comment">{`💬 ${props.comments}`}</button>
          </div>
    )
}

export default Post