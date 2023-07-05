import Separator from '../../../separator/Separator';
import './aboutBeans.scss';

const AboutBeans = () => {
    return (
        <section className="about-beans-section">
            <img className='girl-coffee-img' src="images/girl-coffee.jpg" alt="girl with coffee" />
            <div className="about-beans-wrapper">
                <h2 className="about-beans-heading">About our beans</h2>
                <Separator coffeeBeansColor='black'/>
                <p className="about-beans-paragraph">
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    <br />  <br />
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions.
                    <br />
                    As greatly removed calling pleased improve an. Last ask him cold feel
                    <br /> 
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                </p>
            </div>
        </section>
    );
}

export default AboutBeans;