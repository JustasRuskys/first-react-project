import newsletterImg from '../assets/images/newsletter.webp'

const Newsletter = ({title, subtitle}) => {
    return (
        <>
        <section className="newsletter-block">
            <div className="content">
                <div className="container">
                    <h3 className="title">{title}</h3>
                    <p className="description">{subtitle}</p>
                    <form className="newsletter-form">
                        <input type="email" name="email" placeholder="Email address" />
                        <div className='submit-btn'>
                            <button disabled  className="submit">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='image-area'>
                <div className="image">
                    <img src={newsletterImg} alt="Newsletter Image" loading="lazy" />
                </div>
            </div>
        </section>
        </>
    )
}

export default Newsletter;