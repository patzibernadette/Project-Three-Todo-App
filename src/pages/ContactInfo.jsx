import { useState } from "react";
function ContactInfo() {
  // Store form data
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: ""
  });

  // Handle input changes
  function handleChange(e) {
    setForm({
      ...form, // copy old data
      [e.target.name]: e.target.value // update specific field
    });
  }

  return (
    <div>
      <h2>Contact Form</h2>

      {/* Controlled inputs */}
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
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <textarea
        name="comments"
        placeholder="Comments"
        onChange={handleChange}
      />
    </div>
  );
}

export default ContactInfo;