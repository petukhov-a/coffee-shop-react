import './coffeeCard.scss';

const CoffeeCard = ({img, desq, price}) => {
    return (
        <div className="coffee-card">
            <img src={img} alt="solimo coffee" className="coffee-card__img" />
            <p className="coffee-card__desq">{desq}</p>
            <p className="coffee-card__price">{price}$</p>
        </div>
    );
}

export default CoffeeCard;