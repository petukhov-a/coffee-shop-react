import './navList.scss';

const NavList = ({coffeeBeansColor}) => {

    return (
        <div className="nav-list">
            <a href="#" className="nav-list__link">
                <img src={`images/two-coffee-beans-${coffeeBeansColor}.svg`} alt="logo" className="logo-img" />
                <span>Coffee House</span>
            </a>
            <a href="#" className="nav-list__link">Our coffee</a>
            <a href="#" className="nav-list__link">For your pleasure</a>
        </div>
    );
}

export default NavList;