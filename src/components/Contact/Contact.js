
import React, { useState } from 'react';
import './Contact.css';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validateForm = () => {
        const errors = {};
        let isValid = true;

        if (!formData.name) {
            errors.name = 'Name is required';
            isValid = false;
        }
        if (!formData.email) {
            errors.email = 'Email is required';
            isValid = false;
        }else{
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(formData.email)) {
                errors.email = 'Invalid email format';
                isValid = false;
            }
        }
        if (!formData.subject) {
            errors.subject = 'Subject is required';
            isValid = false;
        }
        if (!formData.message) {
            errors.message = 'Message is required';
            isValid = false;
        }
        setFormErrors(errors);
        return isValid;
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

const handleSubmit = (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  setLoading(true);

  emailjs.send('service_wxizf49', 'template_rmfznxu', formData, 'b8KPnE20lqDEfKhfC')
      .then(() => {
        Swal.fire('Success!', 'Your message has been sent!', 'success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        Swal.fire('Error!', 'Failed to send message. Try again later.', 'error');
      })
      .finally(() => {
        setLoading(false);
      });
  
};

    return (    
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label> Your Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <span style={{color: 'red'}}>{formErrors.name}</span>
                <label> Your Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                <span style={{color: 'red'}}>{formErrors.email}</span>
                <label> Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
                <span style={{color: 'red'}}>{formErrors.subject}</span>
                <label> Message</label>
                <textarea name="message" rows="6" value={formData.message} onChange={handleChange}></textarea>  
                <span style={{color: 'red'}}>{formErrors.message}</span>
                <button type="submit" className='btn' disabled={loading}>
                {loading ? 'Sending...' : 'Submit'}
                </button>
            </form>
            </div>
    );
      
    }
export default Contact;