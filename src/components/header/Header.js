import './header.scss';

const Header = ({background, headerHeading}) => {
    return (
        <header className='header' style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <h1 className='header__heading'>{headerHeading}</h1>
        </header>
    );
}

export default Header;