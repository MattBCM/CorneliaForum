const Comment = (props) => {
    return(
        <div className="commentContainer">
                <p>{props.comment}</p>
                <p id="commentTime">{props.date}</p>
        </div>
    )
}

export default Comment