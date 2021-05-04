import { NavLink } from 'react-router-dom';
import './header.scss';
import Search from './Search/Search.js';

function Header() {
    return (
        <div className='header'>
            <NavLink to='/'>
                <h3>Show popular movies</h3>
            </NavLink>
            <Search />
        </div>
    );
}

export default Header;