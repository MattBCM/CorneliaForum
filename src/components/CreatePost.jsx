import '../App.css'
import { supabase } from '../client'

const createPost = async (event) =>{
    event.preventDefault()
    
    await supabase
    .from('Posts')
    .insert({
        title: event.target.title.value,
        description: event.target.context.value,
        image_url: event.target.image.value == null ? null : event.target.image.value
    })
    .select()

    window.location.assign('/')
}

const CreatePost = () =>{
    return(
        <div className="forumContainer">
            <h1>Create New Post</h1>
            <form onSubmit={createPost}>
                <label htmlFor="title">Title</label><br />
                <input type="text" name="title" required/>
                <br />
                <label htmlFor="context">description</label><br />
                <textarea name="context" id="formText" cols="30" rows="10" placeholder="Type here..." required></textarea>
                <br />
                <label htmlFor="image">Image URL</label><br />
                <input type="text" name='image'/>
                <br /><br />
                <button className="formSubmit">Submit</button>
            </form>
        </div>
    )
}

export default CreatePost