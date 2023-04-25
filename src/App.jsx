import { useEffect, useState } from 'react'
import './App.css'
import { supabase } from './client'
import {useRoutes, Link} from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import CreatePost from './components/CreatePost'
import PostData from './components/PostData'
import EditPost from './components/EditPost'

function App() {

  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [searched, setSearched] = useState("")

  let element = useRoutes([
    {
      path: '/',
      element: <Home data={posts} filtered ={filteredPosts} searched={searched}/>
    },
    {
      path: '/create',
      element: <CreatePost />
    },
    {
      path: '/post/:id',
      element: <PostData data={posts}/>
    },
    {
      path: '/edit/:id',
      element: <EditPost data={posts}/>
    }
  ])

  useEffect(() => {
    const fetchPosts = async() => {
      const {data} = await supabase
      .from("Posts")
      .select()

      setPosts(data)
    }

    fetchPosts().catch(console.error)
  }, [])

  const filterList = (data) => {
    setSearched(data)
    console.log(data)
    if(data != ""){
    const filtered = filteredPosts.filter(post => {
      return post.title
        .replace(" ", "")
        .toLowerCase()
        .includes(data.toLowerCase())
    })
    setFilteredPosts(filtered)}
    else{
        setFilteredPosts(posts)
    }
  }

  return (
    <div className="App">
      <Navigation posts={posts} handleCallBack={filterList}/>
      <div className="container">
        {element}
      </div>
    </div>
  )
}

export default App
