import NavList from "../navList/NavList";

import './navbar.scss';

const Navbar = ({onNavItemClick}) => {
    return (
        <nav className="navbar">
            <NavList coffeeBeansColor="white" onNavItemClick={onNavItemClick}/>
        </nav>
    );
}

export default Navbar;