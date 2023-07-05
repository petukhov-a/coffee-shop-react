import Separator from '../../../separator/Separator';

import './section1.scss';

const Section1 = () => {
    return (
        <section className="section-1" style={{backgroundImage: "url(/images/desk.jpg)",
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "cover",
                                                backgroundPosition: "center"}}>
            <h1 className="section-1__heading">Everything You Love About Coffee</h1>
            <Separator coffeeBeansColor="white"/>
            <p className="section-1__paragraph">
                We makes every day full of energy and taste<br/>
                Want to try our beans?
            </p>
            <button className="section-1__more-btn">
                More
            </button>
        </section>
    );
}

export default Section1;