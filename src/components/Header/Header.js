import { NavLink } from 'react-router-dom';
import './header.scss';
import Search from './Search/Search.js';

function Header() {
    return (
        <div className='header'>
            <NavLink to='/'>
                <h3>Movie App</h3>
            </NavLink>
            <div className='saved'>
                <NavLink to='/saved'>
                    <h3>Saved Movies</h3>
                </NavLink>
                <Search />
            </div>
        </div>
    );
}

export default Header;