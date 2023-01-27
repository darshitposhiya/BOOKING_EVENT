import React from "react";

const Testimonial=()=>
{
    return(
        <>
        
     <div className="container-fluid py-5">
        <div className="container">
          <h2 className="text-primary text-center font-secondary">Testimonial</h2>
           <h1 className="display-4 text-center text-uppercase">Our Clients Say!!!</h1>
            <div className="section-title position-relative text-center mx-auto mb-5 pb-3" style={{maxWidth: '600px'}}>    
            </div>
            </div>

            <div className="owl-carousel testimonial-carousel">
                <div className="testimonial-item bg-dark text-white border-inner p-4">
                    <div className="d-flex align-items-center mb-3">
                        <img className="img-fluid flex-shrink-0" src="BOOKING_EVENT/img/testimonial-1.jpg"  style={{width: '60px', height: '60px'}}/>
                        <div className="ps-3">
                            <h4 className="text-primary text-uppercase mb-1">Client Name</h4>
                            <span>Profession</span>
                        </div>
                    </div>
                    <p className="mb-0">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                    </p>
                </div>
                <div className="testimonial-item bg-dark text-white border-inner p-4">
                    <div className="d-flex align-items-center mb-3">
                        <img className="img-fluid flex-shrink-0" src="BOOKING_EVENT/img/testimonial-2.jpg" style={{width: '60px', height: '60px'}}/>
                        <div className="ps-3">
                            <h4 className="text-primary text-uppercase mb-1">Client Name</h4>
                            <span>Profession</span>
                        </div>
                    </div>
                    <p className="mb-0">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                    </p>
                </div>
                <div className="testimonial-item bg-dark text-white border-inner p-4">
                    <div className="d-flex align-items-center mb-3">
                        <img className="img-fluid flex-shrink-0" src="BOOKING_EVENT/img/testimonial-3.jpg" style={{width: '60px', height: '60px'}}/>
                        <div className="ps-3">
                            <h4 className="text-primary text-uppercase mb-1">Client Name</h4>
                            <span>Profession</span>
                        </div>
                    </div>
                    <p className="mb-0">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                    </p>
                </div>
                <div className="testimonial-item bg-dark text-white border-inner p-4">
                    <div className="d-flex align-items-center mb-3">
                        <img className="img-fluid flex-shrink-0" src="BOOKING_EVENT/img/testimonial-4.jpg" style={{width: '60px', height: '60px'}}/>
                        <div className="ps-3">
                            <h4 className="text-primary text-uppercase mb-1">Client Name</h4>
                            <span>Profession</span>
                        </div>
                    </div>
                    <p className="mb-0">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                    </p>
                </div>
            </div>
        </div>
    

    </>
  
    )
}
export default Testimonial;