import Section1 from "../section1/Section1";
import Section2 from "../section2/Section2";
import Section3 from "../section3/Section3";

const App = () => {
    const data = {
        coffeeGoodsImg: [
            "../recsources/images/solimo-coffee.jpg",
            "../recsources/images/presto-coffee.jpg",
            "../recsources/images/aromistico-coffee.jpg"
        ]
    }

    return (
        <div className="app">
            <Section1 />
            <Section2 />
            <Section3 coffeeGoodImg={data}/>
        </div>
    );
}

export default App;