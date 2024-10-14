import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Home() {
    const [cards, setCards] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const FetchData = async () => {
            try {
                const response = await axios.get('http://localhost:7000/Store');
                setCards(response.data);
            } catch (error) {
                setError(error.response?.data.message || "NOT FOUND 404");
            }
        };
        FetchData();
    }, []);

    return (
        <>
       <div>
            <img style={{width:"100%",height:"700px"}} src="https://deltafulfilment.co.uk/wp-content/uploads/2024/01/best-ecommerce-platforms-uk.jpg  "/>
        </div>
                                    {/********************************************************** */}
            <div>
            <h2 style={{textAlign:"center", padding:"20px"}}>Our Products</h2>
            </div>
        <div className="App">

            <div className="card-container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", textAlign: "center" }}>
                {cards.map(card => (
                    <div className="card" key={card.id} style={{ flex: "1 25%", margin: "5px" }}>
                        <h2>{card.title}</h2>
                        <p>{card.description}</p>
                        <img src={card.logo}
                            style={{ width: "40%", height: "250px", border: "none", textAlign: "center" }}
                        />
                    </div>
                ))}
            </div>
                                          {/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}

            <h3 className="section1">Section</h3>
            <div className='images'>
                <img className='sora2' src='https://m.media-amazon.com/images/I/71WcjsOVOmL._AC_UY218_.jpg' />
                <img className='sora3' src='https://m.media-amazon.com/images/I/71ScMF02zpL._AC_UY218_.jpg' />
                <img className='sora4' src='https://m.media-amazon.com/images/I/31AXHnaGkVL._AC_UY218_.jpg' />
                <img className='sora5' src='https://m.media-amazon.com/images/I/71lGakJ76cL._AC_UL320_.jpg' />
                <img className='sora6' src='https://m.media-amazon.com/images/I/81-HbGIsxVL._AC_UL320_.jpg' />
                <img className='sora7' src='https://m.media-amazon.com/images/I/71PH-KsEmvL._AC_UL320_.jpg' />
                <img className='sora8' src='https://m.media-amazon.com/images/I/71PH-KsEmvL._AC_UL320_.jpg' />
                <img className='sora9' src='https://m.media-amazon.com/images/I/81-HbGIsxVL._AC_UL320_.jpg' />
            </div>
                         {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                         
            <div style={{ padding: 30 }} className='foter' ></div>
            <footer className="footer" role="contentinfo" itemscope itemtype="http://schema.org/WPFooter">
                <div class="footer-left" itemscope itemtype="http://schema.org/Organization" className="h-card">
                    <img src="https://blogger.googleusercontent.com/img/a/AVvXsEiX_A56Zyh-QLWDJ-1Ugpp732H8h6l0yuCSXPFl2Nf8N0zUb8WKryx4MQPk0gYtsBW5QWHOWVfGwQawGSGjCVIh0vEsih7bqGGEjO7XVI0aGVC5GWVsRMmTLcmrf3_QeLysrpaAZzXIfA375a5ohMaBXh-Pzq3vA-YVLFHiRwkDRrn0aMu_HnnqD7zCr3Vr=s300" alt="Logo" itemprop="logo" class="u-logo logo" />
                    <h3 itemprop="name" className="p-name">SDavidPrince<span>Space</span></h3>
                    <nav aria-label="Footer Navigation">
                        <p class="footer-links">
                            <a href="#" className="link-1" itemprop="url">Home</a>
                            <a href="#" itemprop="url">Blog</a>
                            <a href="#" itemprop="url">Comics</a>
                            <a href="#" itemprop="url">Poems</a>
                            <a href="#" itemprop="url">Gallery</a>
                            <a href="#" itemprop="url">Contact</a>
                        </p>
                    </nav>
                    <p className="footer-name">S David Prince Name © 2024</p>
                </div>

                <div className="footer-center">
                    <div itemscope itemtype="http://schema.org/PostalAddress" class="p-address">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        <p>
                            <span itemprop="streetAddress" className="p-street-address">123 This is a Street</span>,
                            <span itemprop="addressLocality" className="p-locality">A Locality</span>,
                            <span itemprop="addressRegion" className="p-region">Region state</span>,
                            <span itemprop="postalCode" className="p-postal-code">12345</span>
                        </p>
                    </div>
                    <div>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <p itemprop="telephone" class="p-tel">+1 234567890</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        <p><a href="mailto:support@company.com" itemprop="email" className="u-email">myname@mail.com</a></p>
                    </div>
                </div>

                <div className="footer-right">
                    <p className="footer-about">
                        <span>About this site</span>
                        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                    </p>
                    <div className="footer-socials">
                        <a href="#" rel="me" aria-label="Facebook" itemprop="sameAs" class="u-url"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#" rel="me" aria-label="Twitter" itemprop="sameAs" class="u-url"><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="#" rel="me" aria-label="LinkedIn" itemprop="sameAs" class="u-url"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="#" rel="me" aria-label="GitHub" itemprop="sameAs" class="u-url"><i class="fa-brands fa-github"></i></a>
                    </div>
                </div>
            </footer>



        </div>
        </>
    );
}

export default Home;
