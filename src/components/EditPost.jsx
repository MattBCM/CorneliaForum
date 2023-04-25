import '../App.css'
import { useParams } from 'react-router-dom'
import { supabase } from '../client'

const EditPost = (props) =>{
    const {id} = useParams()
    const prop = props.data.filter(item => item.id == id)[0]

    const editPost = async (event) => {
        event.preventDefault()
        await supabase
        .from('Posts')
        .update({title: event.target.title.value, description: event.target.context.value})
        .eq('id', id)

        window.location.assign('/')
    }

    const deletePost = async () =>  {
        await supabase
        .from('Posts')
        .delete()
        .eq('id', id)

        window.location.assign('/')
    }

    return(
        <div className="forumContainer">
            <h1>Edit Post</h1>
            <form onSubmit={editPost}>
                <label htmlFor="title">Title</label><br />
                <input type="text" name="title" required defaultValue={prop.title}/>
                <br />
                <label htmlFor="context">description</label><br />
                <textarea name="context" id="formText" cols="30" rows="10" placeholder="Type here..." required defaultValue={prop.description}></textarea>
                <br />
                <label htmlFor="image">Image URL</label><br />
                <input type="text" name='image'/>
                <br /><br />
                <button className="formSubmit">Submit</button>
                <button className='deleteButton'>Delete Post</button>
            </form>
        </div>
    )
}

export default EditPost