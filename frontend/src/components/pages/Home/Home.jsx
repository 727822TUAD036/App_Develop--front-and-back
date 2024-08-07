import React, { useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnDown } from '@fortawesome/free-solid-svg-icons'; // Import arrow turn down icon
import back from '../home2.png';
import { faPlugCircleBolt } from '@fortawesome/free-solid-svg-icons'; // Import plug circle bolt icon
import { faWrench } from '@fortawesome/free-solid-svg-icons'; // Import wrench icon
import { faOilCan } from '@fortawesome/free-solid-svg-icons'; // Import oil can icon
import { faCarBattery } from '@fortawesome/free-solid-svg-icons'; // Import car battery icon
import { faGears } from '@fortawesome/free-solid-svg-icons'; // Import gears icon from solid icons
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'; // Import people group icon from solid icons
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'; // Import clipboard list icon from solid icons
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; // Import magnifying glass icon from solid icons
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


import footerlogo from '../footerlogo.png';
import tier from '../tier.png';
import logoholeimage from '../logoholeimage.png';


const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: '#contactSection', link: '#contactLink' },
        { id: '#priceSection', link: '#priceLink' },
        { id: '#servicesSection', link: '#servicesLink' },
        { id: '#teamSection', link: '#teamLink' },
        { id: '#portfolioSection', link: '#portfolioLink' },
        { id: '#aboutSection', link: '#aboutLink' },
        { id: '#topSection', link: '#topLink' },
      ];

      for (let section of sections) {
        const target = document.querySelector(section.id);
        if (target && window.scrollY >= target.offsetTop - window.innerHeight / 2) {
          document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
          document.querySelector(section.link).classList.add('active');
          break;
        }
      }

      if (window.scrollY >= 110) {
        document.querySelector('.nav-bar').classList.add('scrolled');
      } else {
        document.querySelector('.nav-bar').classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section>
      <img src={back} alt="background vector" className="background-vectorhome" />
      <div className='nav-body'>
        <div className="nav-bar">
          <div className="nav-logo">AUTOGARAGE</div>
          <div className="nav-links-container">
            <Link to="/home" className="nav-link active" id="topLink">Home</Link>
            <Link to="/Contact"><a className="nav-link" href="#aboutSection" id="aboutLink">Contact</a></Link>
            <Link to="/Service"><a className="nav-link" href="#teamSection" id="teamLink">Service</a></Link>
            <div className="nav-link services-dropdown">
              Select
              <ul className="dropdown-menu">
                <Link to = "/periodic"><li><a href="#service1">Periodic Maintenance Service</a></li></Link>
                <Link to = "/diagnostics"><li><a href="#service2">Scanning & Diagnostics</a></li></Link>
                <Link to = "/Value"><li><a href="#service3">Value Added Service</a></li></Link>
                <Link to="/booking"><li><a href="#service4">Book An Appointment</a></li></Link>
                <li><a href="#service5">Body Service</a></li>
              </ul>
            </div>
            <Link to="/faqs" className="nav-link" id="priceLink">FAQs</Link>
            <Link to="/About"><a className="nav-link" href="#portfolioSection" id="portfolioLink">About</a></Link>
            <Link to="/welcome" className="nav-link">Logout</Link>
          </div>
        </div>
      </div>
      <div className="homepageline1">
        <p>Performance Without</p>
      </div>
      <div className="homepageline2">
        <p>Compromise</p>
      </div>
      <div className="homepageline3">
        <p>We provide a wide range of automotive maintenance services.</p>
      </div>
      <div className="homepageline4">
        <p>Our skilled technicians use genuine parts and cutting-edge equipment.</p>
      </div>
      <div className="homeblackimage">
      <div className="arrow-icon1">
        <FontAwesomeIcon icon={faArrowTurnDown} style={{ color: "#ff0000" }} />
      </div>
        <div className="whydoyouchooseus">
          <p>Why Choose Us</p>
        </div>
      </div>
      <div className="homecartier">
      <img src={tier} alt="Hub" style={{width:'1490px',height:'1780px'}} /> 
      </div>
      <br></br>
      <div className="homepowericon">
      <Link to = "/Diagnostics"><FontAwesomeIcon icon={faPlugCircleBolt} style={{ color: "#ff0000" }} /></Link>
      </div>
      <div className="wrinch">
      <Link to = "/Dent"><FontAwesomeIcon icon={faWrench} style={{ color: "#ff0000" }} /></Link>
      </div>
      <div className="oilcan">
      <FontAwesomeIcon icon={faOilCan} style={{ color: "#ff0000" }} />
      </div>
      <div className="batree">
      <FontAwesomeIcon icon={faCarBattery} style={{ color: "#ff0000" }} />
      </div>
      <div className="gears">
      <FontAwesomeIcon icon={faGears} style={{ color: "#ff0000" }} />
      </div>
      <div className="home1txt1">
       <p><b>Diagnostics</b></p>
      </div>
      <div className="home1txt2">
        <p><b>Dent & Paint</b></p>
      </div>
      <div className="home1txt3">
        <p><b>Oil / Lube / Filters</b></p>
      </div>
      <div className="home1txt4">
        <p><b>Battery</b></p>
      </div>
      <div className="home1txt5">
        <p><b>Detailing</b></p>
      </div>
      <div className="icoooon">
      <div className="icondet1">
        <p>If your car needs a mobile diagnostic check done at your home or office, let AUTOGARAGE come to you.</p>
      </div>
      <div className="icondet2">
        <p>AutoGarage specialized in car dent repair and car painting services for a range of models.</p>
      </div>
      <div className="icondet3">
        <p>AutoGarage proudly serves the Lube, Oil & Filter change needs of customer's vehicle performance while extending the life of your vehile.</p>
      </div>
      <div className="icondet4">
        <p>The Battery system consists of different parts that can be fixed individualy, A detailed quotes we perform our systematic battery evaluation.</p>
      </div>
      <div className="icondet5">
        <p>AutoGarage offers professional car detail services at an affordable price. Our interior cleaning, detailing, and restoration services can help you recapture that new car look and smell.</p>
      </div>
      </div>
      <br></br>
      <div className="arrow-icon11">
        <FontAwesomeIcon icon={faArrowTurnDown} style={{ color: "#ff0000" }} />
      </div>
      <div className="weareat">
        <p>We Are At</p>
      </div>
      <div className="iconcontact1">
      <FontAwesomeIcon icon={faPeopleGroup} style={{ color: "#ff0000" }} />
      </div>
      <div className="iconcontact2">
      <FontAwesomeIcon icon={faClipboardList} style={{ color: "#ff0000" }} />
      </div>
      <div className="iconcontact3">
      <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ff0000" }} />
      </div>
      <div className="homenum1">
        <p>35480</p>
      </div>
      <div className="homenum2">
        <p>39133</p>
      </div>
      <div className="homenum3">
        <p>25</p>
      </div>
      <div className="brandsweserve">
        <div className="brandweservetxt">
          <div className="braaaand">
            </div>
            <div className="car132"></div>
        </div>
          <div className="brandicon">
          </div>
          <div className="logoos">
          <div className="bmw">
          <img src={logoholeimage} alt="Hub" style={{width:'1480px',height:'300px'}} /> 
          </div>
          
        </div>
      </div>
      <div className="homefooter">
          <div className="hubimage">
          <img src={footerlogo} alt="Hub" style={{width:'250px',height:'150px'}} /> 
          </div>
          <div className="footertxt1">
            <p>AutoGarage's mission is to enable premium quality care for your luxury car service at affordable </p>
          </div>
          <div className="footertxt2">
            <p>pricing . We ensure real-time updates for complete car care needs with a fair and transparent pricing</p>
          </div>
          <div className="footertxt3">
            <p>mechanism.</p>
          </div>
          <div className="socialmedia">
          <div className="fblogo">
          <FontAwesomeIcon icon={faFacebookF} />
          </div>
          <div className="twet">
          <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div className="in">
          <FontAwesomeIcon icon={faLinkedin}/>
          </div>
          <div className="insta">
          <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="youtube">
          <FontAwesomeIcon icon={faYoutube} style={{ color: '#FF0000' }} />
          </div>
          </div>
          <div className="location">
          <FontAwesomeIcon icon={faLocationDot} style={{ color: '#ff0000' }} />
          </div>
          <div className="loctxt">
            <p>Reality Warehousing Pvt. Ltd., Behind Reliance Smart, Wagholi, Pune, Maharastra – 412207</p>
          </div>
          <div className="mail">
          <FontAwesomeIcon icon={faEnvelope} style={{ color: '#ff0000' }} />
          </div>
          <div className="mailtxt">
            <p>contact@autogarage.com</p>
            </div>
            <div className="phone">
            <FontAwesomeIcon icon={faPhone} style={{ color: '#ff0000' }} />
            </div>
            <div className="phonetxt">
              <p>73 9797 9797</p>
            </div>
      </div>
    </section>
  );
};

export default Home;
