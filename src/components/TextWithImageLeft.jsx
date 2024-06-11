import beachImage from '../assets/images/text-with-image-left.webp';
import imageBg from '../assets/images/text-with-image-left-bg.webp';
import { Link } from 'react-router-dom';

const TextWithImageRight = ({title, subtitle, listTitleLeft, listTextLeft, listTitleRight, listTextRight}) => {
    return(
        <>
        <section className="text-with-image-left">
            <div className="container">
                <div className="container-left">
                    <div className="image-area">
                        <img src={beachImage} alt="Image" loading='lazy'/>
                        <img className='bg' src={imageBg} alt='Background' />
                    </div>
                </div>
                <div className="container-right">
                    <div className="content-area">
                        <h3 className="title">{title}</h3>
                        <p className="description">{subtitle}</p>
                        <div className="lists-with-title-block">
                            <div className="list-left list">
                                <h4 className="list-title">{listTitleLeft}</h4>
                                <p className="list-description">{listTextLeft}</p>
                            </div>
                            <div className="list-right list">
                            <h4 className="list-title">{listTitleRight}</h4>
                                <p className="list-description">{listTextRight}</p>
                            </div>
                        </div>
                        <div className="button-area">
                            <Link className='button' to='/all-services'><span>Book Now</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default TextWithImageRight;