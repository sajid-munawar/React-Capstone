import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="nav-container">
            <div className="navbar">
                <h1 className="Bookstore-CMS">Countries data</h1>
                <nav>
                    <Link to="/" className="BOOKS">See All Countries</Link>
                    <Link to="/country" className="CATEGORIES">Country</Link>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;