import "./Subscribe.css";
const Subscribe = () => {
    return (
        <div className="container p-4 pb-0 subscribe">
        <form action="">
          
          <div className="row cta-sub ">
            
            {/* <div className="col-auto mb-4 mb-md-0"> */}
              {/* <p className="pt-2"> */}
              {/* </p> */}
            {/* </div> */}
            
            <div className="input-group d-flex justify-content-center align-items-center align-content-center">
                <strong className="cta-sub__message mx-2">Get the best deals delivered direct to your inbox each day</strong>
  <input type="text" className="subscription form-control"  placeholder="Enter email address" />
  <button className="btn btn-outline-secondary email-subscription-button" type="button">Subscribe</button>
</div>
            {/* <div className="col-md-5 col-12 mb-4 mb-md-0">
              
              <div className="form-outline mb-4">
                <input type="email" id="form5Example25" className="form-control"  placeholder="Enter email address"/>
              </div>
            </div>
            
            <div className="col-auto mb-4 mb-md-0">
              
              <button type="submit" className="btn email-subscription-button">
                Subscribe
              </button>
            </div> */}
            
          </div>
          
        </form>
      </div>
        )
}

export default Subscribe;