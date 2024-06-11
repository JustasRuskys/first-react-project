import mainHeroBg from '../assets/images/main-hero-bg.webp'
import titleImgOne from '../assets/images/main-hero-title-img-one.webp'
import titleImgTwo from '../assets/images/main-hero-title-img-two.webp'
import titleImgThree from '../assets/images/main-hero-title-img-three.webp'

const MainHeroBanner = ({titleOne, titleTwo, titleThree, subtitle}) => {
    return (
        <>
        <section className="main-hero-banner">
            <img className='main-hero-bg' src={mainHeroBg} alt="Main hero Image" />
            <div className='home-shadow'></div>
            <div className="container">
                <div className="title-block">
                    <h1 className="title">{titleOne} <span className='title-img'><img src={titleImgOne} alt="main-hero-image"/></span> {titleTwo} <span className='title-img'><img src={titleImgTwo} alt="main-hero-image"/></span> {titleThree} <span className='title-img'><img src={titleImgThree} alt="main-hero-image"/></span></h1>
                    <p className="title-description">{subtitle}</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default MainHeroBanner;