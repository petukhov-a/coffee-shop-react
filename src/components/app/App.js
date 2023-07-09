import { Component } from 'react';
import Navbar from '../navbar/Navbar';
import MainPage from "../pages/mainPage/mainPage/MainPage";
import Footer from '../footer/Footer';
import OurCoffeePage from "../pages/ourCoffeePage/ourCoffeePage/OurCoffeePage";
import ForYourPleasure from '../pages/forYourPleasurePage/forYourPleasure';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'main-page'
        }
    }

    showPage = () => {
        switch (this.state.currentPage) {
            case 'our-coffee':
                return (<OurCoffeePage background='/images/our-coffee-header.png' headerHeading='Our coffee'/>);
            case 'for-your-pleasure':
                return (<ForYourPleasure />);
            default: 
                return (<MainPage />);
        }
    }

    onNavItemClick = (pageName) => {
            this.setState({
                currentPage: pageName
            })
    }

    render() {
        const currentPage = this.showPage();

        return (
            <div className="app">
                <Navbar onNavItemClick={this.onNavItemClick}/>
                    {currentPage}
                <Footer onNavItemClick={this.onNavItemClick}/>
            </div>
        );
    }
}

export default App;