import React, { useEffect, useState } from 'react';
import { Button } from "react-bootstrap";
import axios from 'axios';
function About(){
    const [about, setAbout] = useState([]);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        const FetchData = async () => {
            try {
                const response = await axios.get('http://localhost:7000/About');
                setAbout(response.data);
                
            } catch (error) {
                setError(error.response?.data.message || "NOT FOUND 404");
            } 
        };
        FetchData();
    }, []);
    return(
        <>
        <div> 
            <h2 style={{textAlign:"center", padding:30  }}> Who we are </h2>
           <p className="pragrah-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis diam erat.
             Duis velit lectus, posuere a blandit sit amet, tempor at lorem. Donec ultricies, lorem sed ultrices interdum.
              Leo metus luctus sem, vel vulputate diam ipsum sed lorem. Donec tempor arcu nisl, et molestie massa scelerisque ut.
               Nunc at rutrum leo.....
               </p>
               <Button className="btn">Read More</Button>
               <img className="img-about"  src="https://cdn.prod.website-files.com/653f3a3dffdcadbaa7ddc5bb/6582bcb9eac684257cea348b_EC-Background_images-1920x1080x2-4.webp"/>
        </div>
                            {/* *&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
                      <div>     
                    <h5 style={{textAlign:"center",fontSize:25}}>Team Manger</h5>

                    <div className="card-container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", textAlign:"center"  }}>
                {about.map(card => (
                    <div className="card" key={card.id} style={{ flex: "1 25%",margin:"5px" }}>
                        <h2>{card.name}</h2>
                        <p>{card.description}</p>
                        <img src={card.photo}
                        style={{ width: "95%", height:"300px", border: "none",textAlign:"center" }} 
                              />
                    </div>
                ))}

                </div>

                {/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}

                <div class="form-containerrr">

                           <h5 style={{position:"relative",left:"1%",color:"white",padding:5}}>Fill out below form and our expert support team will connect you soon!</h5>
    <input style={{padding:10, width:'30%',position:"relative",left:"1%",top:"20px"}} type="text" id="name"placeholder='Name' name="name" required/> 
<br/>
<br/>
<input style={{padding:12, width:'30%',position:"relative",left:"1%",top:"20px"}} type="email" id="email" placeholder='Email' name="email" required/>
<br/> 
<br/>

<input style={{padding:12, width:'30%',position:"relative",left:"1%",top:"20px"}} type="tel" id="phone"placeholder='phone' name="phone" required/>
<br/>
<br/>

<input style={{padding:12, width:'30%',position:"relative",left:"1%",top:"20px"}} type="text" id="address" placeholder='address' name="Address" required/>
<br/>
<br/>

<textarea style={{padding:12, width:'30%',position:"relative",left:"1%",top:"20px"}} id="message" placeholder='message' name="Message" required>Message</textarea>
<br/>
<br/>
<button style={{position:"relative",left:"1%",top:"20px"}} id='frmm' type="submit">Submit</button>
</div>



                
               

                




                </div>
        

        </>
    )   
}


export default About;