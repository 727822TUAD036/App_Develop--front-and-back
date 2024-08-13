import React from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';



class Welcome extends React.Component {
  render() {
    return (
        <section>
            <div className='welbackground-example'>
            
                <div className="welbookbutton">
                    <br></br>
                        

                 </div>
                 <div className="welpro">
                    <p>Professional Auto Repair</p>
                 </div>
                 <div className="weland">
                    <p>& Maintenance</p>
                 </div>
                 <div className="welweare">
                    <p>We are dedicated to providing high-quality auto repair and maintenance to keep you and your car save on the road.</p>
                 </div>
                 <div className="welwegive">
                    <p>We give your car the care it deserves.</p>
                 </div>
                 <div className="welcontact">
                    <div class="welcontactdata-container">
                        <Link to="/adminlog"><span class="welbtn">ADMIN</span></Link>
                    </div>
                    <div class="welbookdata-container">
                            <Link to="/Signup"><span class="welbtn">BOOK AN APPOINTMENT</span></Link>
                        </div>
                 </div>
            </div>
        </section>


    );
}
}

export default Welcome;
