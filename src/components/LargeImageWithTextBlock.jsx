import largeImg from '../assets/images/bigimage.webp'
import { Link } from 'react-router-dom';

const LargeImageWithText = ({title, subtitle}) => {
    
    return (
        <>
        <section className="large-image-block">
            <img className='block-background' src={largeImg} alt="Image" loading="lazy" />
            <div className='image-shadow'></div>
            <div className="container">
                <div className="title-block">
                    {title.split(`</br>`).map((line, index) => (
                        <h1 className='title' key={index}>{line}</h1>
                    ))}
                    <p className="description">{subtitle}</p>
                    <Link className='button' to='/all-services'><span>Book Now</span></Link>
                </div>
            </div>
        </section>
        </>
    )
}

export default LargeImageWithText;