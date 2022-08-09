import { Link } from 'react-router-dom';

function Navbar() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.title.value);
        e.target.reset()
    }
    return (
        <div className="nav-container">
            <div className="navbar">
                <h1 className="Bookstore-CMS">Countries data</h1>
                <nav>
                    <Link to="/" className="BOOKS">See All Countries</Link>
                    <Link to="/country" className="CATEGORIES">Country</Link>
                </nav>
            </div>
            <form action="#" onSubmit={(e)=>handleSubmit(e)} >
                <input type="text" name='title' />
                <button type="submit"> Search </button>
            </form>
        </div>
    );
}

export default Navbar;