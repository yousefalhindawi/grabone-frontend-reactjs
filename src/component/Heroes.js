
import Sidebar from './Sidebar';
import Card from "./Card";
const Heroes = () => {
    return (
        <div className="container d-flex justify-content-between align-content-start align-items-start my-3">
            <Sidebar/>
            <div className="row mx-2">

            <div className="col-lg-6 col-md-6 mt-2">
            <Card
            image="https://main-cdn.grabone.co.nz/goimage/fullsize/aeb84584eaa6c41eed7337bd45f4ad22e01cdf99.jpg"
            title="Luxury 5-Star Auckland Stay at Cordis"
            category="Cordis"
            location="Auckland"
            bought="31"
            price="711"
            salePrice="279"
            />
            </div>
            <div className="col-lg-6 col-md-6 mt-2">
            <Card
            image="https://main-cdn.grabone.co.nz/goimage/fullsize/03271b22cb2560bde21866096247b76a0be8d7c4.jpg"
            title="Superpass to Rainbow's End"
            category="Rainbow's End"
            location="Manukau"
            bought="1972"
            price="64.99"
            salePrice="49"
            />
            </div>

            </div>
        </div>
        )
};

export default Heroes;