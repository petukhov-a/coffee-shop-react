import CoffeeCards from '../coffeeCards/CoffeeCards';

import './section3.scss';

const Section3 = ({data}) => {
    return (
        <section className="section-3" style={{backgroundImage: "url('images/paper.jpg')",
                                           backgroundRepeat: 'no-repeat',
                                           backgroundSize: 'cover',
                                           backgroundPosition: 'center'}}>
            <h2 className="section-3__heading section-heading">
                Our best
            </h2>
            <CoffeeCards data={data}/>
        </section>
    );
}

export default Section3;