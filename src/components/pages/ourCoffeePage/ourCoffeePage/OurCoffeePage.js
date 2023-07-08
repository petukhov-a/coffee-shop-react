import { Component } from "react";
import Header from "../../../header/Header";
import AboutBeans from "../aboutBeansSection/AboutBeans";
import CoffeeSearchFilter from "../coffeeSearchFilter/CoffeeSearchFilter";
import OurCoffeeCards from "../ourCoffeeCards/OurCoffeeCards";

class OurCoffeePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {coffeeImg: 'images/aromistico-coffee.jpg', coffeeName: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, id: 1},
                {coffeeImg: 'images/presto-coffee.jpg', coffeeName: 'Presto Coffee Beans 1 kg', country: 'Kenya', price: 12.99, id: 2},
                {coffeeImg: 'images/solimo-coffee.jpg', coffeeName: 'Solimo Coffee Beans 2 kg', country: 'Columbia', price: 8.99, id: 3},
                {coffeeImg: 'images/aromistico-coffee.jpg', coffeeName: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, id: 4},
                {coffeeImg: 'images/aromistico-coffee.jpg', coffeeName: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, id: 5},
                {coffeeImg: 'images/aromistico-coffee.jpg', coffeeName: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, id: 6},
            ],
            term: '',
            filter: '',
            hide: false,
            paragraph: this.aboutBeansParagraph,
            heading: 'About our beans'
        }
    }

    aboutBeansParagraph = (
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
    );

    

    coffeeDesqParagraph = (country, price) => {
        return (
            <p className="about-coffee-paragraph">
                <span>Country:</span> {country}
                <br /> <br />
                <span>Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                <br /> <br />
                <span>Price:</span><span className="coffee-price">&nbsp; &nbsp;{price}$</span>
            </p>
        );
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    filterCoffee = (items, filter, filteringValue) => {
        if (filter === '') {
            return items;
        }

        return items.filter(item => {
            return item[filteringValue].includes(filter);
        })
    }

    onCardClick = (hide, heading) => {
        this.setState({hide, heading});
    }

    render() {
        const {data, term, filter, paragraph, heading} = this.state;
        const searchData = this.filterCoffee(data, term, 'coffeeName');
        const filterData = this.filterCoffee(searchData, filter, 'country');
        const coffeeParagraph = this.coffeeDesqParagraph('Brazil', 16.99);

        return (
            <div className="our-coffee-page">
                <Header />
                <AboutBeans paragraph={paragraph} heading={heading}/>
                <CoffeeSearchFilter onUpdateSearch={this.onUpdateSearch} onFilterSelect={this.onFilterSelect} filter={filter} hide={this.hide}/>
                <OurCoffeeCards data={filterData} onCardClick={this.onCardClick}/>
            </div>
        );
    }
}

export default OurCoffeePage;