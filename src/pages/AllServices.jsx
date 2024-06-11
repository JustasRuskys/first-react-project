import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import OfferPopup from '../template-parts/offersPopup';


const AllServices = () => {

    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);
    let popupOffer = '';

    const [modalTitle, setName] = '';

    const updateModal = (e) => {
        popupOffer = e;
        setName(popupOffer.offerName);
    }

    const readMore = (e) => {
        popupOffer = e;
        console.log(e);
    }

    useEffect(() => {
        const fetchOffers = async () => {
            try {
            const res = await fetch('/api/offers');
            const data = await res.json();
            setOffers(data);
            } catch (error) {
                console.log('error fetching data', error);
            } finally {
                setLoading(false);
            }
        }

        fetchOffers();
     }, []);

    return (
    <>
    <section className="all-services-page">
        <div className="container">
            <div className="title">
                <h2>Experiences</h2>
            </div>
            {loading ? (
                        <Spinner loading={loading} />
                    ) : (
            <div className="services">
                {offers.map((offer) => (
                <div className="single-service">
                    <div className="image-area">
                        <img src={offer.image} alt="Service Image" />
                        <div className='shadow'></div>
                    </div>
                    <div className="top-service-content">
                        <h4 className="service-title">{offer.offerName}</h4>
                        <p className="service-price">&#40;{offer.price}&#41;</p>
                        <span className='read-button open-popup' onClick={updateModal}>Read More</span>
                    </div>
                    <div className="bottom-service-content">
                        <div className='full-price'>
                        <p>${offer.fullPrice}</p>
                        </div>
                        <div className='button-block'>
                        <Link  className="button" to={`/Service/${offer.id}`}><span>Book Now</span></Link>
                        </div>
                    </div>
                </div>
                 ))}
            </div>
        )}
        </div>
    </section>
    <div className="offer-popup-modal">
            <div className="modal-area">
                <div className="close-modal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23.243" height="23.243" viewBox="0 0 23.243 23.243">
                        <g id="Group_561" data-name="Group 561" transform="translate(-1019.379 -227.379)">
                            <line id="Line_96" data-name="Line 96" x1="19" y2="19" transform="translate(1021.5 229.5)" fill="none" stroke="#FFF" strokeLinecap="round" strokeWidth="3"/>
                            <line id="Line_97" data-name="Line 97" x2="19" y2="19" transform="translate(1021.5 229.5)" fill="none" stroke="#FFF" strokeLinecap="round" strokeWidth="3"/>
                        </g>
                    </svg>
                </div>
                <div className="content-area">
                    
                    <div className="title-block">
                        <h3 className="modal-title">{modalTitle}</h3>
                        <p className="modal-price">&#40;&#41;</p>
                        <p className="modal-full-price">$ Fulidhoo</p>
                        <div className="button-block">
                            <span className="button">Book Now</span>
                        </div>
                    </div>
                    <div className="description">
                        <h4 className="modal-description-title">Service Description</h4>
                        <p className="modal-description-text"></p>
                        <br></br>
                        <p className="modal-description-text">Led by expert guides, you'll receive a safety briefing and fascinating insights into the behavior of these docile creatures. Then, equipped with snorkeling gear, you'll descend into the warm, turquoise waters to join these fascinating animals in their natural habitat. Nurse sharks, renowned for their calm demeanor, will gracefully swim around you, providing an unforgettable encounter with these magnificent creatures.</p>
                        <br></br>
                        <p className="modal-description-text">Whether you're an experienced snorkeler or a first-timer, our tour caters to all skill levels, ensuring a safe and enjoyable experience. Immerse yourself in the wonder of the underwater world and create lasting memories as you share the ocean with these gentle giants. Book your "Shark Point Snorkeling" tour today for an unforgettable blend of adventure and marine marvels!</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default AllServices;