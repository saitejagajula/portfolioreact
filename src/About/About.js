import React from 'react'

export const About = () => {
  return (<>
   <section id="about" className="py-5 mt-1  pt-1">
    <div className="container text-center">
      <h2 className="mb-0 fw-bold fs-1">About Me</h2>
      <p className="text-muted fw-bold">My introduction</p>
    </div>
  </section>
  <div className="container row gap-5 gap-md-0 mt-md-0  d-flex ">
    <div className="col-md-6 col-12  bg-dak d-flex  ">
      <img  src="saiteja1.jpg" className="  rounded-4  "
      style={{height:"275px" ,width:"400px" ,marginTop:"75px" ,marginLeft:"50px" }}/>    </div>
        <div className="col-md-6 col-12  bg-daner">
          <div className="d-flex gap-4 "style={{marginLeft:"50px"}}>
            <div className="border border-1  rounded-2 bg-white d-flex flex-column align-items-center  gap-0"style={{width:"130px",height:"100px"}}>
              <i className="bi bi-briefcase fs-4 mb-0"></i>
              <p className="fw-bold mb-0">Experince</p>
              <p className="text-muted mb-0">3years</p>

            </div>
            <div className="border border-1  rounded-2 bg-white d-flex flex-column align-items-center gap-0"style={{width:"130px",height:"100px"}}>
                          <i className="bi  bi-laptop fs-4 mb-0"></i>
                          <p className="fw-bold mb-0">Completed</p>
                          <p className="text-muted mb-0">5 Projects</p>
                        </div>
            <div className="border border-1  rounded-2 bg-white d-flex flex-column align-items-center gap-0"style={{width:"130px",height:"100px"}}>
                            <i className=" bi bi-mortarboard fs-4 mb-0"></i>
              <p className="fw-bold mb-0">GPA</p>
              <p className="text-muted mb-0">3.4/4.0</p>

            </div>
            

          </div>
          <div className="fw-bold   text-muted mt-5" style={{ padding:"10px 10px 10px 55px",textAlign:"justify", width: "500px" ,height:"300px"}}>
            <p>I'm a Frontend Developer with 3 years of professional experience, skilled in building responsive and scalable web applications using HTML5, CSS3, JavaScript (ES6+), and React.js. I specialize in component-driven architecture, leveraging React Hooks for efficient state and lifecycle management, and Redux Toolkit for global state control. With expertise in integrating RESTful APIs via Fetch or Axios, I focus on performance optimization using lazy loading, memoization, and modular design patterns. I follow Agile development practices, utilize Git for version control, and implement CI/CD pipelines for streamlined deployments. My strong emphasis on mobile-first design with Bootstrap ensures seamless cross-device user experiences.

            </p> 
           <a className="btn btn-dark fw-bolder mt-1 px-4 py-3 mt rounded-4" href="#">
          View CV <i className="bi bi-file-earmark-text	"></i>
        </a></div>


        </div>


  </div>
  </>)
}
export default About;
