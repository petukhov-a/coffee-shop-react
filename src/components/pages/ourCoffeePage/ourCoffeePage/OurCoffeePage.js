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
                {coffeeImg: 'images/aromistico-coffee.jpg', coffeeName: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: 6.99, id: 2},
                {coffeeImg: 'images/aromistico-coffee.jpg', coffeeName: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: 6.99, id: 3},
                {coffeeImg: 'images/aromistico-coffee.jpg', coffeeName: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, id: 4},
                {coffeeImg: 'images/aromistico-coffee.jpg', coffeeName: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, id: 5},
                {coffeeImg: 'images/aromistico-coffee.jpg', coffeeName: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, id: 6},
            ],
            term: ''
        }
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    searchCoffee = (items, term) => {
        if (term === '') {
            return items;
        }

        return items.filter(item => {
            return item.coffeeName.includes(term);
        })
    }

    render() {
        const {data, term} = this.state;
        const searchData = this.searchCoffee(data, term);

        return (
            <div className="our-coffee-page">
                <Header />
                <AboutBeans />
                <CoffeeSearchFilter onUpdateSearch={this.onUpdateSearch}/>
                <OurCoffeeCards data={searchData}/>
            </div>
        );
    }
}

export default OurCoffeePage;