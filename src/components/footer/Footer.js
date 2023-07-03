import NavList from '../navList/NavList';
import Separator from '../separator/Separator';
import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <NavList coffeeBeansColor="black"/>
            <Separator coffeeBeansColor="black" />
        </footer>
    );
}

export default Footer;