import '../App.css'
import Post from './Post'
import { useState, useEffect } from 'react'


const Home = (props) => {
  const [posts, setPosts] = useState([])
  const [filtered, setFiltered] = useState([])

  useEffect(() =>{
    setPosts(props.data);
    setFiltered(props.filtered)
    console.log(props.data)
  }, [props])

  const filterPosts = (event) => {
    event.preventDefault()
    switch(event.target.posts.value){
      case 'date':
        setPosts((posts) => [...posts.sort(function(a, b){
          return new Date(b.created_at) - new Date(a.created_at)
        })])
        setPosts((filtered) => [...filtered.sort(function(a, b){
          return new Date(b.created_at) - new Date(a.created_at)
        })])
        break
      case 'best':
        setPosts((posts) => [...posts.sort(function(a, b){
          return b.upvote - a.upvote
        })])
        setFiltered((filtered) => [...filtered.sort(function(a, b){
          return b.upvote - a.upvote
        })])
        break
      case 'comment':
        setPosts((posts) => [...posts.sort(function(a, b){
          return b.comments - a.comments
        })])
        setFiltered((filtered) => [...filtered.sort(function(a, b){
          return b.comments - a.comments
        })])
    }

  }

    return(
        <div>
            <h1 className='headline'>A Forum for Fans of RPGs</h1>
            <div className="filterContainer">
          <form action="" onSubmit={filterPosts}>
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
              (props.searched.length > 0) ? filtered.map((post, index) => {
                return(<Post title={post.title} desc={post.description} upvote={post.upvote} downvote={post.downvote} comments={post.comments} id={post.id} key={post.id} created={post.created_at}/>)
              }) :
              (posts && posts.length > 0) ?
              posts.map((post, index) => {
                return(<Post title={post.title} desc={post.description} upvote={post.upvote} downvote={post.downvote} comments={post.comments} id={post.id} key={post.id} created={post.created_at}/>)
              }) : <h1>No Posts Yet</h1>
            }
        </div>
        </div>
    )
}

export default Home