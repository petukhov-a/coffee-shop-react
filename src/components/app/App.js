import { Component } from 'react';
import Navbar from '../navbar/Navbar';
import MainPage from "../mainPage/mainPage/MainPage";
import Footer from '../footer/Footer';
import OurCoffeePage from "../ourCoffeePage/ourCoffeePage/OurCoffeePage";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'none'
        }
    }

    render() {
        return (
            <div className="app">
                <Navbar />
                <MainPage />
                <OurCoffeePage />
                <Footer />
            </div>
        );
    }
}

export default App;