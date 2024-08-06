import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Faqs.css';

const Faqs = () => {
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
          document.querySelectorAll('.nav-link321098').forEach(link => link.classList.remove('active321098'));
          document.querySelector(section.link).classList.add('active321098');
          break;
        }
      }

      if (window.scrollY >= 110) {
        document.querySelector('.nav-bar321098').classList.add('scrolled321098');
      } else {
        document.querySelector('.nav-bar321098').classList.remove('scrolled321098');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [faqs, setFaqs] = useState([
    { question: 'What services do you offer?', answer: 'We offer a wide range of car maintenance and repair services including periodic maintenance, diagnostics, and body shop services.' },
    { question: 'How can I book a service?', answer: 'You can book a service through our website or by calling our customer service number.' },
    { question: 'What are your operating hours?', answer: 'We are open from Monday to Saturday, 9 AM to 6 PM.' }
  ]);

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const handleAddFaq321098 = (e) => {
    e.preventDefault();
    if (question && answer) {
      setFaqs([...faqs, { question, answer }]);
      setQuestion('');
      setAnswer('');
    }
  };

  const toggleFAQ321098 = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <section>
        <div className='nav-body321098'>
          <div className="nav-bar321098">
            <div className="nav-logo321098">AUTOGARAGE</div>
            <div className="nav-links-container321098">
              <Link to="/home" className="nav-link321098 active321098" id="topLink">Home</Link>
              <a className="nav-link321098" href="#portfolioSection" id="portfolioLink">About</a>
              <a className="nav-link321098" href="#teamSection" id="teamLink">Select</a>
              <div className="nav-link321098 services-dropdown321098">
                Services
                <ul className="dropdown-menu321098">
                  <li><a href="#service1">Periodic Maintenance Service</a></li>
                  <li><a href="#service2">Scanning & Diagnostics</a></li>
                  <li><a href="#service3">Value Added Service</a></li>
                  <li><a href="#service4">Common Repairs</a></li>
                  <li><a href="#service5">Body Shop</a></li>
                </ul>
              </div>
              <a className="nav-link321098" href="#priceSection" id="priceLink">FAQs</a>
              <a className="nav-link321098" href="#aboutSection" id="aboutLink">Contact</a>
              <Link to="/welcome" className="nav-link321098">Logout</Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="faqs-container321098">
          <div className="default321098">      
            <div className="faqs-list321098">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item321098">
                  <div className="faq-question321098" onClick={() => toggleFAQ321098(index)}>
                    <span>{faq.question}</span>
                    <span className="faq-icon321098">{openIndex === index ? '-' : '+'}</span>
                  </div>
                  <div className={`faq-answer321098 ${openIndex === index ? 'open321098' : ''}`}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
              <h1 className="faqs-title321098">Frequently Asked Questions</h1>
              <form className="faq-form321098" onSubmit={handleAddFaq321098}>
                <div className="form-group321098">
                  <label htmlFor="question">Question:</label>
                  <input
                    type="text"
                    id="question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Enter your question"
                  />
                </div>
                <div className="form-group321098">
                  <label htmlFor="answer">Answer:</label>
                  <input
                    type="text"
                    id="answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Enter the answer"
                  />
                </div>
                <button type="submit">Add FAQ</button>
              </form> 
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
