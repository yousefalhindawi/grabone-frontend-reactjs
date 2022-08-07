import "./Card.css";
import {NavLink} from "react-router-dom";
const Card = (props) => {
  return (
    
      <div className="card">
        <div className="content">
          <NavLink
            to="/"
            // target="_blank"
            // rel="noreferrer"
          >
            <div className="content-overlay"></div>
            <img
              className="content-image card-img-top"
              src={props.image}
              alt={props.title}
            />
            <div className="content-details fadeIn-bottom fadeIn-right">
              <p className="fs-5">{props.title}</p>
            </div>
          </NavLink>
        </div>

        <div className="card-body mt-3 mx-3">
          <div>
            <h6>{props.title}</h6>
            <span className="card-text" style={{ color: "#01b2ee" }}>
              {props.category}
            </span>
            <p className="card-text" style={{ color: "#92a2ad" }}>
              {props.location}
            </p>
          </div>

          <div className="d-flex justify-content-between total font-weight-bold">
            <span style={{ color: "#92a2ad", fontSize: "12px", position: "relative", bottom:'-25px' }}>
              {props.bought} bought
            </span>
            <div style={{position: "relative", bottom:'-8px' }}>
              <span
                className="mx-2 text-decoration-line-through"
                style={{ color: "#92a2ad", fontSize: "12px" }}
              >
                {props.price}
              </span>
              
              <span className="h1 sale-price" style={{ color: "#1eb3ec"}}>${props.salePrice}</span>
              
            </div>
          </div>
        </div>
      </div>
   
  );
};
export default Card;
