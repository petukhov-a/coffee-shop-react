import './header.scss';

const Header = () => {
    return (
        <header className='header' style={{
            backgroundImage: 'url(/images/our-coffee-header.png)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <h1 className='header__heading'>Our Coffee</h1>
        </header>
    );
}

export default Header;