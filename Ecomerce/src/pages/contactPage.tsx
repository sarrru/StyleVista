import HomeNavbar from "./Navbar&Modals/HomeNavbar.tsx";
import "../css/contactPage.css"
import {useLocation} from "react-router-dom";
import RatingSection from "./Rating/RatingSection.tsx";


const ContactPage = () =>{

    const location = useLocation(); // Use useLocation to get the current location
    const currentLocation = location.pathname;

    return(
        <>
            <div className={"contact-page-div"}>
                <HomeNavbar activePage={currentLocation} />

                <div className={"get-container"}>
                    <h2>Get <b>in</b> touch<b>.</b></h2>
                </div>

                <div className={"contact-main-content"}>
                    <div className={"contact-location-opening-info"}>
                        <h2>Contact Info</h2>
                        <span className={"email-phone-content"}>
                            <h4>Phone</h4>
                            <h5>+977 9809805432</h5>
                        </span>
                        <span className={"email-phone-content"}>
                            <h4>Customer Care</h4>
                            <h5>+977 9823097220</h5>
                        </span>
                        <span className={"email-phone-content"}>
                            <h4>Email</h4>
                            <h6>StyleVista@gmail.com</h6>
                        </span>
                        <span className={"email-phone-content"}>
                            <h4>Location</h4>
                            <h6>Kathmandu, Nepal</h6>
                        </span>
                    </div>



                    <RatingSection />
                </div>

                {/*<div className={"line1"}></div>*/}
                {/*<div className={"feast-map"}>*/}
                {/*    /!*<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14485.069560096505!2d85.30451964926758!3d27.70535550897092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190652aee2b7%3A0xf6714db78c4fe33!2sFeast%20n%20Fizz%20Restro!5e0!3m2!1sen!2snp!4v1702898266972!5m2!1sen!2snp"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>*!/*/}
                {/*</div>*/}
                <div className={"line2"}></div>
                <div className={"copyright-text"}>
                    <h5>Copyright © 2023/2024 StyleVista</h5>
                </div>

            </div>
        </>
    )
}

export default ContactPage