import './coffeeSearchFilter.scss';

const CoffeeSearchFilter = ({onUpdateSearch, onFilterSelect, filter, display}) => {
    const onFilterClick = (e, name) => {
        if (e.target.classList.value.includes('active')) {
            onFilterSelect('');
        } else {
            onFilterSelect(name);
        }
    }

    const buttonsData = [
        {name: 'Brazil'},
        {name: 'Kenya'},
        {name: 'Columbia'}
    ]

    const buttons = buttonsData.map(({name}) => {
        const active = name === filter;
        const className = 'coffee-goods-filter-buttons__button'
        const clazz = active ? className + ' active' : className;

        return (
            <button className={clazz}
                    onClick={(e) => onFilterClick(e, name)}
                    key={name}>
                {name}
            </button>
        );
    });

    return (
        <div className="coffee-goods" style={{display: display}}>
            <form className="coffee-goods-search-form" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search-text">Looking for</label>
                <input type="text"
                       onChange={(e) => onUpdateSearch(e.target.value)}
                       placeholder='start typing here...' />
            </form>
            <div className="coffee-goods-filter">
                <span>Or filter</span>
                <div className="coffee-goods-filter-buttons">
                    {buttons}
                </div>
            </div>
        </div>
    );
}

export default CoffeeSearchFilter;