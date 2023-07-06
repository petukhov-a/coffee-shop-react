import OurCoffeeCard from '../ourCoffeeCard/OurCoffeeCard';
import './ourCoffeeCards.scss';

const OurCoffeeCards = ({data}) => {
    const cards = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <OurCoffeeCard key={id} {...itemProps}/>
        );
    });

    return (
        <div className="our-coffee-cards">
            {cards}
        </div>
    );
}

export default OurCoffeeCards;