import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Starting values for the form; used to reset it after submit
const emptyForm = { firstName: '', lastName: '', phone: '', email: '', message: '' };

// Contact page: info panel plus an interactive form
function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const navigate = useNavigate();

  // Runs on every keystroke: updates just the field the user is typing in
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Runs when the form is submitted: captures the data, then redirects home
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Contact form submitted:', formData);
    navigate('/');
  };

  return (
    <section className="page split">
      <aside className="card">
        <h1>Contact me</h1>
        <p>Email: <a href="mailto:nayla.bambrah@gmail.com">nayla.bambrah@gmail.com</a></p>
        <p>Phone: (647) 807-9503</p>
        <p>Location: Toronto, ON</p>
      </aside>

      <form className="card" onSubmit={handleSubmit}>
        <label>
          First name
          <input name="firstName" value={formData.firstName} onChange={handleChange} required />
        </label>
        <label>
          Last name
          <input name="lastName" value={formData.lastName} onChange={handleChange} required />
        </label>
        <label>
          Contact number
          <input name="phone" type="tel" value={formData.phone} onChange={handleChange} />
        </label>
        <label>
          Email address
          <input name="email" type="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Message
          <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />
        </label>
        <button className="btn" type="submit">Send message</button>
      </form>
    </section>
  );
}

export default Contact;