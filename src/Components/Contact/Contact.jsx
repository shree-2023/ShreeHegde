import React from 'react'
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';
import githubicon from '../../assets/github-color.svg';
import linkedin from '../../assets/linkedin.webp'
const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "9a4d6966-9a6b-41ad-a17c-60d943f11448");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us Message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form or find my contact information below.
                 Your feedback, questions, and suggestions are important to me as i can improve myself.</p>
                  <ul>
                    <li><img src={mail_icon} alt="" />shreelakshmihegde.1@gmail.com</li>
                    <li><img src={phone_icon} alt="" />+91 9964300914</li>
                    <li><img src={location_icon} alt="" />Bangalore</li>
                    <ul className="social-links">
  <li>
    <a href="https://github.com/shree-2023" target="_blank" rel="noopener noreferrer">
      <img src={githubicon} alt="GitHub icon" />
    </a>
    <a href="https://www.linkedin.com/in/shreelakshmi-narasimha-hegde-122742217/" target="_blank" rel="noopener noreferrer">
      <img src={linkedin} alt="LinkedIn icon" />
    </a>
  </li>
</ul>

                  </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter Your Name' required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required/>
                <label >Enter Your Message Here</label>
                <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>

    </div>
  )
}

export default Contact