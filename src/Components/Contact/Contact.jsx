import React from 'react'
import './Contact.css'
import massage_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "46b37eb4-2230-416b-aeae-2177642747e3");

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
        <h3>Sand us a message <img src={massage_icon} alt="" /></h3>
        <p>feel free to rech out through contact from or find our contact informaction below</p>
    <ul>
        <li> <img src={mail_icon} alt="" />ritammaji2003@gmial.com</li>
        <li><img src={phone_icon} alt="" />PH:- 8001843341</li>
        <li><img src={location_icon} alt="" />77 Howrah,WestBengal</li>  
    </ul>
    </div>
    <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text' name='name' placeholder='Enter your Name'
            required/>
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your Mobile Number'
            required/>
            <label>Write your massage here</label>
            <textarea name="Massage"  rows="6" placeholder='Enter your Massage' required></textarea>
            <button type='Submit' className='btn dark-btn'>Submit Now <img src={white_arrow } alt="" /></button>

        </form>
        <span>{result}</span>
    </div>
    </div>
  )
}

export default Contact