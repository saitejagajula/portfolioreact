import React from 'react'
import "./Body.css"

export const Body = () => {
  return (<>
     <div className="container bg-dak ms-5" style={{marginTop:"180px"}}>
      <div className="row bg-rk justify-content-md-between bg-dager justify-content-md-none g-4 " style={{marginBottom:"200px"}}>
 
        <div className="col-md-2 col-6 d-flex flex-column align-items-md-end  bg-ark social align-items-center order-1 order-md-1  gap-4 h-50"style={{marginTop:"80px"}}>
            <a href="https://www.linkedin.com/in/gajula-sai-teja-3459661b1/" target="none"  className="text-dark"><i className="bi bi-linkedin fs-3"></i></a>
            <a href="https://github.com/saiteja9989-cyber" target="none" className="text-dark"><i className="bi bi-github fs-3"></i></a>
            <a href="mailto:saitejagajula27@gmail.com" target="none" className="text-dark"><i className="bi bi-envelope-fill fs-3"></i></a>
        </div>

        <div className="col-md-4 col-12 mx-4  bg-dnger    mb-1 order-3 order-md-2" style={{marginLeft: "25%"}}>
          <h1 className="fw-bold mb-3 mx-auto fs-1">Sai Teja Gajula</h1>
          <div id="carouselExample" class="carousel slide mb-3" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active"><p className="fw-bold text-muted">FrontEnd Developer</p></div>
              <div className="carousel-item"><p className="fw-bold ">Software Developer</p></div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <p className="fw-semibold text-mted">I'm a passionate Computer Science Graduate from Missouri</p>
           <div className=" mt-2 ms-0">
        <a className="btn btn-dark fw-bolder mt-1 ms-0 px-4 py-3 mt rounded-4" href="#contact">
          Say Hello <i className="bi bi-send"></i>
        </a>
      </div>
        </div>
  <div className="col-md-4  col-6 home-image  bg-dark order-2 order-md-3 " > 
</div>
     

    </div>
    </div></>
  
  )
}
export default Body;