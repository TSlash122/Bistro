import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FormStyles.css';
import Swal from 'sweetalert2';

const ContactForm = () => {

  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const [FormData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });


  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...FormData,
      [name]: value
    });
  };


  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!FormData.name) {
      errors.name = "* Name is required"
      isValid = false;
    }

    if (!FormData.email) {
      errors.email = "* Email address is required";
      isValid = false;

    } else {
      const newEmail = FormData.email;
      setEmail(newEmail);

      // Regular expression for a basic email format check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailRegex.test(newEmail);

      if (!isValid) {
        errors.email = "* Invalid email address entered";
      }
    }

    if (!FormData.subject) {
      errors.subject = "* Subject is required"
      isValid = false;
    }

    if (!FormData.message) {
      errors.message = "* Message is required"
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;

  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (validateForm()) {
        setLoading(true);

        // await axios.post('https://my-node-app-qfg5.onrender.com/submit-form', { FormData });
        // console.log("Form submitted:", FormData);
        Swal.fire('Success!', 'Message sent successfully', 'success'); 
      
        setLoading(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });

      } else {
        console.log("Form has errors");
      }
    } catch (error) {
      console.log("Failed to submit form:", error);
      Swal.fire('Error!', 'Something went wrong. Please check your internet connection and try again.', 'error');
      setLoading(false);
    }
  }


  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your Name:</label>
        <input
          type='text'
          name='name'
          value={FormData.name}
          onChange={handleChange}
        />
        <span style={{ color: 'red' }}>{formErrors.name}</span>

        <label>Email:</label>
        <input
          type='email'
          name='email'
          value={FormData.email}
          onChange={handleChange}
        />
        <span style={{ color: 'red' }}>{formErrors.email}</span>

        <label>Subject:</label>
        <input
          type='text'
          name='subject'
          value={FormData.subject}
          onChange={handleChange}
        />
        <span style={{ color: 'red' }}>{formErrors.subject}</span>

        <label>Message:</label>
        <textarea
          rows="6"
          placeholder="Type your message here"
          name='message'
          value={FormData.message}
          onChange={handleChange}
        />
        <span style={{ color: 'red' }}>{formErrors.message}</span>

        <button type="submit" className="button" disabled={loading}>{loading ? 'Submitting...' : 'SUBMIT'}</button>
      </form>
    </div>
  )
}

export default ContactForm;