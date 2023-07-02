import paper from '../resources/images/paper.jpg';
import CoffeeCard from '../coffeeCard/CoffeeCard';

import './coffeeCards.scss';

const CoffeeCards = ({data}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <CoffeeCard key={id} {...itemProps}/>
        );
    });

    return (
        <div className="coffee-cards" style={{backgroundImage: `${paper}`,
                                              backgroundRepeat: 'no-repeat',
                                              backgroundSize: 'cover',
                                              backgroundPosition: 'center'}}>
            {elements}
        </div>
    );
}

export default CoffeeCards;