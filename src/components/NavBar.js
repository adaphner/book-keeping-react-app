import Clock from './Clock';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <div className="top-nav">
                <q>We are what we repeatedly do. Excellence, then, is not an act, but a habit.</q>
                <p>Will Durant</p>
            </div>
            <header>
                <div className='logo'>
                    <h1>WebDevIo.com</h1>
                </div>
                <nav className='nav-links'>
                    <Link to="/">Home</Link>
                    <Link to="/Invoices">Invoices</Link>
                    <Link to="/Expenses">Expenses</Link>
                </nav>
                <div className="timer">
                    <Clock />
                </div>
            </header>
        </>
    )
}

export default NavBar;