import NavList from '../navList/NavList';
import Separator from '../separator/Separator';
import './footer.scss';

const Footer = ({onNavItemClick}) => {
    return (
        <footer className="footer">
            <NavList coffeeBeansColor="black" onNavItemClick={onNavItemClick}/>
            <Separator coffeeBeansColor="black" />
        </footer>
    );
}

export default Footer;