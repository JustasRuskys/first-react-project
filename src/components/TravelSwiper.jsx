import { useState, useEffect } from 'react';

// Import Swiper React components
import { Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const TraverlSwiper = ({textAboveTitle, title}) => {

    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOffers = async () => {
            try {
            const res = await fetch('/api/offers?_limit=10');
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
        <section className="travel-swiper-section">
            <div className="container">
                <div className="travel-swiper-title-block">
                    <p className="description">{textAboveTitle}</p>
                    <h2 className="travel-swiper-title">{title}</h2>
                    <Link className="button" to='first-react-project/all-services'><span>View all</span></Link>
                </div>
                <div className="travel-swiper-block swiper">
                <Swiper
                modules={[Autoplay, A11y]}
                slidesPerView={2}
                loop
                allowTouchMove={false}
                speed={9000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    stopOnLastSlide: false,
                  }}
                breakpoints={{
                    1550: {
                        slidesPerView: 3.5,
                    },
                    1000: {
                        slidesPerView: 4.5,
                    },
                    600: {
                        slidesPerView: 3.5,
                    },
                    450: {
                        slidesPerWiew: 2.5,
                    }
                }}
                >
                    {loading ? (
                        <h2>Loading...</h2>
                    ) : (
                        offers.map((offer) => (
                            <SwiperSlide className="travel-swiper-single-offer" key={offer.id}>
                            <div className="image-block">
                                <img className='offer-image' src={offer.image} alt="Offer Image" loading='lazy'/>
                            </div>
                            <div className="offer-description">
                                <h5 className="offer-name">{offer.offerName}</h5>
                                <p>&#40;{offer.price}&#41;</p>
                                <Link  className="offer-button" to={`/Service/${offer.id}`}><span>Book Now</span></Link>
                            </div>
                        </SwiperSlide>
                    ))
                    )}
                    </Swiper>
                </div>
                
            </div>
        </section>
        </>
    )
}
export default TraverlSwiper;