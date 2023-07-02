import paper from '../resources/images/paper.jpg';

import './section3.scss';

const Section3 = ({coffeeGoodsImg}) => {
    return (
        <section class="section-3" style={{backgroundImage: `${paper}`,
                                           backgroundRepeat: 'no-repeat',
                                           backgroundSize: 'cover',
                                           backgroundPosition: 'center'}}>
        <h2 class="section-3__heading section-heading">
            Our best
        </h2>
        <div class="coffee-cards">
            <div class="coffee-cards-card">
                <img src="images/solimo-coffee.jpg" alt="solimo coffee" class="coffee-cards-card__img" />
                <p class="coffee-cards-card__desq">Solimo Coffee Beans 2 kg</p>
                <p class="coffee-cards-card__price">10.73$</p>
            </div>
            <div class="coffee-cards-card">
                <img src="images/presto-coffee.jpg" alt="presto coffee" class="coffee-cards-card__img" />
                <p class="coffee-cards-card__desq">Presto Coffee Beans 1 kg</p>
                <p class="coffee-cards-card__price">15.99$</p>
            </div>
            <div class="coffee-cards-card">
                <img src="images/aromistico-coffee.jpg" alt="aromistico coffee" class="coffee-cards-card__img" />
                <p class="coffee-cards-card__desq">AROMISTICO Coffee 1 kg</p>
                <p class="coffee-cards-card__price">6.99$</p>
            </div>
        </div>
    </section>
    );
}

export default Section3;