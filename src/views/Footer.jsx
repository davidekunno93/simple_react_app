import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <>
            <div className="space-block-for-footer">
                <footer className='footer fixed-bottom'>
                    <div className="black-box">
                        <div className="footer-details flx-r just-se mt-2">
                            <Link className="white small" href="/contact-us">Contact Us</Link>
                            <Link className="white small" href="/about-us">About Us</Link>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
export default Footer;