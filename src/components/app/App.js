import { Component } from 'react';
import Navbar from '../navbar/Navbar';
import MainPage from "../pages/mainPage/mainPage/MainPage";
import Footer from '../footer/Footer';
import OurCoffeePage1 from "../pages/ourCoffeePage1/ourCoffeePage1/OurCoffeePage1";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'main-page'
        }
    }

    showPage = () => {
        switch (this.state.currentPage) {
            case 'our-coffee-1':
                return (<OurCoffeePage1 />);
            default: 
                return (<MainPage />);
        }
    }

    onLinkClick = (pageName) => {
            this.setState({
                currentPage: pageName
            })
    }

    render() {

        const currentPage = this.showPage();

        return (
            <div className="app">
                <Navbar onLinkClick={this.onLinkClick}/>
                    {currentPage}
                <Footer />
            </div>
        );
    }
}

export default App;