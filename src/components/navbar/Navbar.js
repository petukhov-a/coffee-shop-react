import NavList from "../navList/NavList";

import './navbar.scss';

const Navbar = ({onLinkClick}) => {
    return (
        <nav className="navbar">
            <NavList coffeeBeansColor="white" onLinkClick={onLinkClick}/>
        </nav>
    );
}

export default Navbar;