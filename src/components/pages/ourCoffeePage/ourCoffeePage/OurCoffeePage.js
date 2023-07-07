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
            filter: ''
        }
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

    render() {
        const {data, term, filter} = this.state;
        const searchData = this.filterCoffee(data, term, 'coffeeName');
        const filterData = this.filterCoffee(searchData, filter, 'country');

        return (
            <div className="our-coffee-page">
                <Header />
                <AboutBeans />
                <CoffeeSearchFilter onUpdateSearch={this.onUpdateSearch} onFilterSelect={this.onFilterSelect} filter={filter}/>
                <OurCoffeeCards data={filterData}/>
            </div>
        );
    }
}

export default OurCoffeePage;