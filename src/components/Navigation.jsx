import { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Navigation = (props) =>{

    const [message, setMessage] = useState("")
    const handleMessage = (event) => {
        setMessage(event.target.value)
        props.handleCallBack(event.target.value)
    }
    return(
    <ul className='navigationBar'>
        <li><Link to='/'><img src="./assets/logo-color.png" alt="" /></Link></li>
        <li><input type="text" name='search' className='searchBar' placeholder='Search...' onChange={handleMessage} value={message}/></li>
        <li><Link to='/create'><button>Create New Post</button></Link></li>
    </ul>
    )


}

export default Navigation