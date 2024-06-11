const FaqBlock = ({title, subtitle, faqOneTitle, faqOneAnswer, faqTwoTitle, faqTwoAnswer, faqThreeTitle, faqThreeAnswer}) => {

    return (
        <>
        <section className="faq-block">
            <div className="container">
                <div className="title-and-text">
                    <h2 className="title">{title}</h2>
                    <p className="text">{subtitle}</p>
                </div>
                <div className="single-faq">
                    <div className="accordion">
                        <button className="btn-accrodion faq-accordion">
                            <p className="acc-title">{faqOneTitle}</p>
                            <span className="chevron">
                                ^
                            </span>
                        </button>
                        <div className="information">
                            <div className="single-inner-price">
                                <p className="answer">{faqOneAnswer}</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion">
                        <button className="btn-accrodion faq-accordion">
                            <p className="acc-title">{faqTwoTitle}</p>
                            <span className="chevron">
                                ^
                            </span>
                        </button>
                        <div className="information">
                            <div className="single-inner-price">
                                <p className="answer">{faqTwoAnswer}</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion">
                        <button className="btn-accrodion faq-accordion">
                            <p className="acc-title">{faqThreeTitle}</p>
                            <span className="chevron">
                                ^
                            </span>
                        </button>
                        <div className="information">
                            <div className="single-inner-price">
                                <p className="answer">{faqThreeAnswer}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default FaqBlock;