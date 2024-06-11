import Swiper from 'swiper'; //swiper js
import 'swiper/css'; // swiper css
import MainHeroBanner from '../components/MainHeroBanner.jsx';
import TravelSwiper from '../components/TravelSwiper.jsx';
import TextWithImageLeft from '../components/TextWithImageLeft.jsx';
import LargeImageWithText from '../components/LargeImageWithTextBlock.jsx';
import NewsLetter from '../components/NewsletterBlock.jsx';
import FaqBlock from '../components/FaqBlock.jsx';

const HomePage = () => {
    return (
        <>
        <MainHeroBanner 
            titleOne = 'Experience'
            titleTwo = 'the beauty of'
            titleThree = 'Maldives with us'
            subtitle = 'Discover the stunning beauty of Maldives with our exclusive tour packages. Immerse yourself in crystal clear water, pristine beaches and unforgettable experiences'
        />

        <TravelSwiper 
            textAboveTitle = 'Unforgettable'
            title = 'the best Experience in Maldives'
        />

        <TextWithImageLeft 
            title = 'Discover the beauty of Maldives with Us'
            subtitle = 'Experience the best of Maldives with our tour agency. Our experienced guides, customizable packages, and commitment to customer satisfaction ensure an unforgettable journey.'
            listTitleLeft = 'Experienced Guides'
            listTextLeft = 'Experience the best of Maldives with our tour agency. Our experienced guides, customizable packages, and commitment to customer satisfaction ensure an unforgettable journey.'
            listTitleRight = 'Customizable Packages'
            listTextRight = 'Tailor your trip to Maldives according to your preferences and interests.'
        />

        <LargeImageWithText 
            title = 'Discover the </br> Maldives with us'
            subtitle= 'Experience the beauty of the Maldives through our curated excursions'
        />

        <NewsLetter 
            title = 'Subscribe to newsletter'
            subtitle = 'Stay updated with the latest offers, travel tips, and more!'
        />
        <FaqBlock 
            title = 'FAQs'
            subtitle = 'Find answers to common questions about booking excursions and traveling to Maldives.'
            faqOneTitle = 'How to book excursions'
            faqOneAnswer = "Booking excursions is easy! Simply browse our website, select the excursions you're interested in, choose your preferred dates, and proceed to checkout."
            faqTwoTitle = 'Are meals included?'
            faqTwoAnswer = 'Some excursions include meals, while others do not. The inclusion of meals will be specified in the excursion description.'
            faqThreeTitle = 'Is transportation included?'
            faqThreeAnswer = 'Transportation is included for most excursions. However, please check the specific details of each excursion to confirm if transportation is provided.'
        />
        </>
    )
}

export default HomePage;