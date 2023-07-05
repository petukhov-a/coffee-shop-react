import './navList.scss';

const NavList = ({coffeeBeansColor, onNavItemClick}) => {

    return (
        <div className="nav-list">
            <button className="nav-list__link" onClick={() => onNavItemClick('main-page')}>
                <img src={`images/two-coffee-beans-${coffeeBeansColor}.svg`} alt="logo" className="logo-img" />
                <span>Coffee House</span>
            </button>
            <button className="nav-list__link" onClick={() => onNavItemClick('our-coffee-1')}>Our coffee</button>
            <button className="nav-list__link" onClick={() => onNavItemClick('our-coffe-2')}>For your pleasure</button>
        </div>
    );
}

export default NavList;