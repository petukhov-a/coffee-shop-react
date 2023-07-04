import Section1 from "../section1/Section1";
import Section2 from "../section2/Section2";
import Section3 from "../section3/Section3";

const MainPage = () => {
    const data = [
        {img: "images/solimo-coffee.jpg", desq: 'Solimo Coffee Beans 2 kg', price: 10.73, id: 1},
        {img: "images/presto-coffee.jpg", desq: 'Presto Coffee Beans 1 kg', price: 15.99, id: 2},
        {img: "images/aromistico-coffee.jpg", desq: 'AROMISTICO Coffee 1 kg', price: 6.99, id: 3},
    ];

    return (
        <div className="mainPage">
            <Section1 />
            <Section2 />
            <Section3 data={data}/>
        </div>
    );
}

export default MainPage;