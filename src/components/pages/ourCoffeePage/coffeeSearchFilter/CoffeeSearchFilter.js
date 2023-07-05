import './coffeeSearchFilter.scss';

const CoffeeSearch = () => {
    return (
        <div className="coffee-goods">
            <form className="coffee-goods-search-form">
                <label htmlFor="search-text">Looking for</label><input type="text" placeholder='start typing here...' />
            </form>
            <div className="coffee-goods-filter">
                <span>Or filter</span>
                <div className="coffee-goods-filter-buttons">
                    <button className="coffee-goods-filter-buttons_button">
                        Brazil
                    </button>
                    <button className="coffee-goods-filter-buttons_button">
                        Kenya
                    </button>
                    <button className="coffee-goods-filter-buttons_button">
                        Columbia
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CoffeeSearch;