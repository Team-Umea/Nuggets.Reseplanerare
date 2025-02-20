import { useState } from 'react';
import '../../styles/Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('formulär-data skickad: ', formData);
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="contact-container">
           <h2>Kontakta Oss</h2>
           <form className='contact-form' onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor="name">Namn</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ange ditt namn"
                    required
                />
            </div>
            <div className='form-group'>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ange din Email"
                    required
                />
            </div>
            <div className='form-group'>
                <label htmlFor="message">Meddelande</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ange ditt meddelande"
                    rows="5"
                    required
                ></textarea>
            </div>
            <button type="submit" className="submit-button">Skicka Meddelande</button>
            </form> 

            {submitted && <p className='success-message'>Tack för ditt meddelande!</p>}
        </div> 
        
     );
}

export default Contact;