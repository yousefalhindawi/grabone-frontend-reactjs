
import Card from "./Card";
import './Section.css';
import {NavLink} from "react-router-dom";
// import SectionRow from './SectionRow';
const Section = (props)=>{
    return (
        <div className="container my-5">
            <div className="d-flex justify-content-start align-content-center align-items-center my-3">
            <h1 className="homepage-header">{props.header}</h1>
            <NavLink to='/' className="mx-5"><span className="homepage-btn text-wrap">View More <i className="fa fa-angle-right" aria-hidden="true"></i></span> </NavLink>
            </div>
        <div className="row">
        <div className="col-lg-3 col-md-6 my-2">
          <Card
            image={props.image}
            title={props.title}
            category={props.category}
            location={props.location}
            bought={props.bought}
            price={props.price}
            salePrice={props.salePrice}
          />
          </div>
        <div className="col-lg-3 col-md-6 my-2">
          <Card
            image={props.image}
            title={props.title}
            category={props.category}
            location={props.location}
            bought={props.bought}
            price={props.price}
            salePrice={props.salePrice}
          />
          </div>
        <div className="col-lg-3 col-md-6 my-2">
          <Card
            image={props.image}
            title={props.title}
            category={props.category}
            location={props.location}
            bought={props.bought}
            price={props.price}
            salePrice={props.salePrice}
          />
          </div>
        <div className="col-lg-3 col-md-6 my-2">
          <Card
            image={props.image}
            title={props.title}
            category={props.category}
            location={props.location}
            bought={props.bought}
            price={props.price}
            salePrice={props.salePrice}
          />
          </div>

     
        </div>
      </div>
    )
}
export default Section;