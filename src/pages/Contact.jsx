import { useState } from "react";
function Contact() {
  
  const [form, setForm] = useState({
    Name: "",
    Number: "",
    email: "",
    comments: ""
  });

  
  function handleChange(e) {
    setForm({
      ...form, 
      [e.target.name]: e.target.value 
    });
  }
  return (
    <div className="contact-container">
      <h2>Contact Info</h2>

      
      <input
        name="firstName"
        placeholder="First Name"
        onChange={handleChange} 
      />

      <input
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange} 
      />

      <input
        name="number"
        placeholder="Number"
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <textarea
        name="comments"
        placeholder="Comments"
        onChange={handleChange}
      />

      <button type="submit">Send</button>
    </div>  
  );
}


export default Contact;