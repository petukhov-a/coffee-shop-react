import OurCoffeeCard from '../ourCoffeeCard/OurCoffeeCard';
import './ourCoffeeCards.scss';

const OurCoffeeCards = ({data, onCardClick, display}) => {
    const cards = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <OurCoffeeCard key={id} id={id} {...itemProps} onCardClick={onCardClick}/>
        );
    });

    return (
        <div className="our-coffee-cards" style={{display: display}}>
            {cards}
        </div>
    );
}

export default OurCoffeeCards;