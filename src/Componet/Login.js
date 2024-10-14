import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [api, setApi] = useState({
        name:'',
        email:'',
        password:'',
    });

    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const response = await axios.post('http://localhost:8000/login',api); 
            setMessage('Login successful! Token: ' + response.data.token);
        } catch (error) {
            console.log(error);
            setMessage('Login failed: ' + error.response?.data.message || ' Error ');
        }
    };

    return (    
        <div>
            <h2 style={{textAlign:"center", position:"relative" ,right:"20px"}}>Login</h2>
            <form onSubmit={handleSubmit} className='form'>
                <div style={{ padding: 8, position: "relative", top: "30px", left:"1%", textAlign: "center" }}>
                    <label>Name:</label>
                    <input type="text"  onChange={(e) => setApi({...api,name:e.target.value})} required />
                </div>
                <div style={{ padding: 5, position: "relative", top: "30px",left:"2%", textAlign: "center" }}>
                    <label>Email:</label>
                    <input type="email" onChange={(e) => setApi({...api,email:e.target.value})} required />
                </div>
                <div style={{ padding: 5, position: "relative", top: "35px", textAlign: "center" }}>
                    <label>Password:</label>
                    <input type="password"  onChange={(e) => setApi({...api,password:e.target.value})} required />
                </div>
                <button style={{ padding: 5, position: "relative", top: "50px",left:"1%" ,width:"50%", background:"linen"}} type="submit">Login</button>
            </form>
            {message && <h3 style={{color:"red", padding:25, textAlign:"center", position:"relative",right:"50px"}}>{message}</h3>}
        </div>  
    );
}

export default Login;
