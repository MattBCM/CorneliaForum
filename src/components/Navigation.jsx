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
    /*
    <ul className='navigationBar'>
        <li><Link to='/'><img src="./assets/logo-color.png" alt="" /></Link></li>
        <li><input type="text" name='search' className='searchBar' placeholder='Search...' onChange={handleMessage} value={message}/></li>
        <li><Link to='/create'><button>Create New Post</button></Link></li>
        <li><div><img src="https://braverplayers.org/wp-content/uploads/2022/09/blank-pfp-300x300.png" alt="" /></div></li>
    </ul>
    */
    <div className='navigationBar'>
        <div><Link to='/'><img src="./src/assets/logo-color.png" alt="" /></Link></div>
        <div><input type="text" name='search' className='searchBar' placeholder='Search...' onChange={handleMessage} value={message}/></div>
        <div><Link to='/create'><button>Create New Post</button></Link></div>
        <div><img src="https://braverplayers.org/wp-content/uploads/2022/09/blank-pfp-300x300.png" alt="" id='pfp' /></div>
    </div>
    )


}

export default Navigation