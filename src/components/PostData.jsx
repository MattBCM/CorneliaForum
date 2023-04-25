import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { supabase } from '../client'
import Comment from './Comment'

const PostData = (props) => {
    const {id} = useParams()
    const prop = props.data.filter(item => item.id == id)[0]
    const [upvote, setUpvote] = useState(prop.upvote)
    const [downvote, setDownvote] = useState(prop.downvote)
    const [comments, setComments] = useState(prop.comments)
    const [commentList, setCommentList] = useState([])
    const [message, setMessage] = useState('')

    const addComment = async (event) => {
      if(event.key === 'Enter'){
        event.preventDefault()
        await supabase
        .from('Comments')
        .insert({
            Post: id,
            comment: event.target.value
        })

        await supabase
        .from('Posts')
        .update({comments: comments + 1})
        .eq('id', id)



        window.location.assign('/')
    }
    }

    const addUpvote = async () => {
        await supabase
        .from('Posts')
        .update({upvote: upvote + 1})
        .eq('id', id)

        setUpvote(upvote + 1)

    }

    const addDownvote = async () => {
        await supabase
        .from('Posts')
        .update({downvote: downvote + 1})
        .eq('id', id)
        
        setDownvote(downvote + 1)

        window.location.assign('/')
    }

    const handleMessage = (event) => {
        setMessage(event.target.value)
    }

    useEffect(() => {
        const fetchComments = async () => {
            const {data} = await supabase
            .from('Comments')
            .select()
            
            const filtered = data.filter(item => item.Post == prop.id)
            setCommentList(filtered)
        }

        fetchComments().catch(console.error)

    }, [])

    return(
        <div className="indPostContainer">
            <h1>{prop.title}</h1>
            <h2>{prop.description}</h2>
            <button className="upVote" onClick={addUpvote}>{`🡅 ${upvote}`}</button>
            <button className="downVote" onClick={addDownvote}>{`🡇 ${downvote}`}</button>
            <button className="comment">{`💬 ${comments}`}</button>
            <Link to={`/edit/${id}`}><button className="editButton">Edit Post</button></Link><br /><br />
            <label htmlFor="comment">Write Comment</label><br />
            <input type="text" name="comment" id="commentTextBox" value={message} onKeyDown={addComment} onChange={handleMessage}/>
            <p>Comments:</p>
            <div className='commentsContainer'>
                {
                           commentList && commentList.length > 0 ?
                           commentList.map((comment, index) => {
                               return(<Comment comment={comment.comment} date = {comment.date} key={index}/>)
                           }) : <h2>No Comments</h2>
                } 
            </div>
        </div>
    )
}

export default PostData