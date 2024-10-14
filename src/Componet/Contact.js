
import React from 'react';
import { useState } from 'react';
import axios from 'axios';


function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        password: ''
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        try {
            const from = await axios.post('http://localhost:7000/Customers', formData);
            setSuccess(from.data.message);
            setFormData({ name: '', email: '', phone: '', address: '', password: '' });
        } catch (error) {
            setError(error.response?.data.message || 'not found 404.....');
        }
    };

    // ******************************************************************//

    return (
        <>
            <div>
                <h2>Contact Us</h2>
                <div className="form-contact">

                    <form onSubmit={handleSubmit}>

                        <input
                            style={{ padding: 15, position: "relative", top: "25px", left: "1%", width: "30%" }} type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                        <br />
                        <input style={{ padding: 15, position: "relative", top: "25px", left: "1%", width: "30%", type: "text", name: "name" }} type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                        <br />
                        <input style={{ padding: 15, position: "relative", top: "25px", left: "1%", width: "30%", type: "text", name: "name" }} type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                        <br />
                        <input style={{ padding: 15, position: "relative", top: "25px", left: "1%", width: "30%", type: "text", name: "name" }} type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
                        <br />
                        <input style={{ padding: 15, position: "relative", top: "25px", left: "1%", width: "30%", type: "text", name: "name" }} type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                        <br />
                        <button style={{ padding: 15, position: "relative", top: "30px", width: "10%" }} type="submit">Submit</button>
                    </form>

                </div>
            </div>
        </>
    );
}



export default Contact;
