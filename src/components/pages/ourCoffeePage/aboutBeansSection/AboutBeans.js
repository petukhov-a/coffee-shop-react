import Separator from '../../../separator/Separator';
import './aboutBeans.scss';

const AboutBeans = ({paragraph, heading, aboutCoffeeImg}) => {
    return (
        <section className="about-beans-section">
            <img className='girl-coffee-img' src={aboutCoffeeImg} alt="girl with coffee" />
            <div className="about-beans-wrapper">
                <h2 className="about-beans-heading">{heading}</h2>
                <Separator coffeeBeansColor='black'/>
                {paragraph}
            </div>
        </section>
    );
}

export default AboutBeans;