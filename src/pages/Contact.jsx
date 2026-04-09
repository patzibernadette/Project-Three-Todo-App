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
    <div>
      <h2>Contact Info</h2>

      
      <input
        name="Name"
        placeholder="Name"
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