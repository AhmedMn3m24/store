import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

function Services() {
    const [servics, setServics] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:7000/Servics');
                setServics(response.data);
            } catch (error) {
                console.error("Error fetching data:", error); 
            }
        };
        fetchData();
    }, []);

    return (
        <>
             <div>     
                    <h5 className="ser">Our Services</h5>
                        <div id="bg">
                            <img id="cards" src="https://th.bing.com/th/id/OIP.PY7kTJcQKSh7SFF6zD1PAAHaE8?w=246&h=180&c=7&r=0&o=5&pid=1.7"/>
                            <p id="pragrgh-ser">At Your Company Name, we are dedicated to providing <br/>
                                exceptional services tailored to meet your needs. Our team of experts <br/>
                                works diligently to ensure the highest<br/>
                                 quality in everything we offer.we understand that every client is unique.<br/>
                                  That's why we offer custom
                                  solutions designed specifically for your requirements.</p>


                            <h5 className="serv1" >our commitment doesn't end after project delivery.
                         <br/> We provide ongoing support <br/>
                             and maintenance to ensure that your
                            systems run smoothly and efficiently.</h5>


                            <h5 className="serv2" >our commitment doesn't end after project delivery.
                         <br/> We provide ongoing support <br/>
                             and maintenance to ensure that your
                            systems run smoothly and efficiently.</h5>

                            <h5 className="serv3" >our commitment doesn't end after project delivery.
                         <br/> We provide ongoing support <br/>
                             and maintenance to ensure that your
                            systems run smoothly and efficiently.</h5>
                    </div>
                </div>

                <div id="foterr">
                    
   <ul> 
        <ul>
        <li><a href="#top">Home</a></li>
        <li><a >Services</a></li>
        <li><a>About</a></li>
        <li><a>Contact</a></li>
</ul>

        <p id="phone">phone:0114756544</p>    
        <br/>  
        <p id="eamil">Email:Store501@gamil.com</p> 
            


        </ul>
                        </div>
        
                </> 

    )
}

export default Services;
