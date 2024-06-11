import footerImg from '../assets/images/footer-white.webp';
import { Link } from 'react-router-dom';

const Footer = ({logoTitle}) => {


    const contactItems = ['whatsapp +960 775-7232', 'info@fulidhootours.com'];
    const pagesItems = ['Home', 'Book a tour to Maldives', 'Excursions', 'Privacy Policy', 'Terms & Conditions'];

    return (
        <>
        <section className="footer">
            <div className="image-area">
                <img src={footerImg} alt="Footer Image" loading="lazy" />
            </div>
            <div className="footer-content">
                <div className="container">
                <Link to='/'><h2 className="title">{logoTitle}</h2></Link>
                <div className="grid-container">
                    <div className="left">
                        <div className='map-side'>
                        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27948.799674575217!2d73.40857097387682!3d3.680462870213496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b40a97677260e13%3A0x9718bed60d0c707c!2sFulidhoo!5e1!3m2!1slt!2slt!4v1717653987469!5m2!1slt!2slt" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className="right">
                        <div className="menu">
                            <div className="contact-block menu-blocks">
                                <h4 className="right-title menu-title">Contact Us</h4>
                                <ul className="footer-menu-items">
                                    {contactItems.map((item, index) => (
                                        <li key={index} className="footer-menu-item">{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="pages-block menu-blocks">
                            <h4 className="right-title menu-title">Important Pages</h4>
                            <ul className="footer-menu-items">
                                    {pagesItems.map((item, index) => (
                                        <li key={index} className="footer-menu-item">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Footer;