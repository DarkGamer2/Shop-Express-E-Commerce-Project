import "../Styles/Footer.css"

const Footer=()=>{

    return(
       <div>
           <footer>
            <div className="footer-container">
            <div className="row">
                <div className="col">
                    <h1>LOCATION <div className='underline'><span></span></div></h1>
                   
                    <p>John Street,</p>
                    <p>Tunapuna</p>
                    <p>Trinidad & Tobago, West Indies</p>
                    </div>
                    <div className="col">
                        <h1>PARTNERS <div className='underline'><span></span></div></h1>
                    </div>
                    <div className="col">
                        <h1>CONTACT US <div className='underline'><span></span></div></h1>
                        <div className="contact-container">
                            <p className='email-address'>Email: st_huggins@yahoo.com</p>
                        <p className='phone-number'>Phone Number: 868-296-3087</p>
                        </div>
                    </div>
               </div>
                <p className='reserved'> &#169;Copyright 2022,All Rights Reserved</p>
        </div>
           </footer>
        </div>
    )
}

export default Footer;