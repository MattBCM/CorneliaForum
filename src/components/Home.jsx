import '../App.css'
import Post from './Post'
import { useState, useEffect } from 'react'


const Home = (props) => {
  const [posts, setPosts] = useState([])

  useEffect(() =>{
    setPosts(props.data);
    console.log(props.data)
  }, [props])

    return(
        <div>
            <h1 className='headline'>A Forum for Fans of RPGs</h1>
            <div className="filterContainer">
          <form action="">
            <label htmlFor="posts" >Sort By: </label>
            <select name="posts" id="postFilter">
              <option value="date">Date Submitted</option>
              <option value="best">Most Liked</option>
              <option value="comment">Most Comments</option>
            </select>
            <input type="submit" />
          </form>
        </div>
        <div className="postContainer">
            {
              (props.searched.length > 0) ? props.filtered.map((post, index) => {
                console.log(props.searched)
                console.log(props.filtered)
                return(<Post title={post.title} desc={post.description} upvote={post.upvote} downvote={post.downvote} comments={post.comments} id={post.id} key={post.id}/>)
              }) :
              (posts && posts.length > 0) ?
              posts.map((post, index) => {
                return(<Post title={post.title} desc={post.description} upvote={post.upvote} downvote={post.downvote} comments={post.comments} id={post.id} key={post.id}/>)
              }) : <h1>No Posts Yet</h1>
            }
        </div>
        </div>
    )
}

export default Home