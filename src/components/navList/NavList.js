import './navList.scss';

const NavList = ({coffeeBeansColor, onLinkClick}) => {

    return (
        <div className="nav-list">
            <button className="nav-list__link" onClick={() => onLinkClick('main-page')}>
                <img src={`images/two-coffee-beans-${coffeeBeansColor}.svg`} alt="logo" className="logo-img" />
                <span>Coffee House</span>
            </button>
            <button className="nav-list__link" onClick={() => onLinkClick('our-coffee-1')}>Our coffee</button>
            <button className="nav-list__link" onClick={() => onLinkClick('our-coffe-2')}>For your pleasure</button>
        </div>
    );
}

export default NavList;