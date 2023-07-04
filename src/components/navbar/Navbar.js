import NavList from "../navList/NavList";

import './navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavList coffeeBeansColor="white"/>
        </nav>
    );
}

export default Navbar;