import './ourCoffeeCard.scss';

const OurCoffeeCard = ({coffeeImg ,coffeeName, country, price}) => {
    return (
        <div className="our-coffee-card">
            <img src={coffeeImg} alt="Aromistico" className='our-coffee-card__img'/>
            <p className="our-coffee-card__name">{coffeeName}</p>
            <p className="our-coffee-card__country">{country}</p>
            <p className="our-coffee-card__price">{price}$</p>
        </div>
    );
}

export default OurCoffeeCard;