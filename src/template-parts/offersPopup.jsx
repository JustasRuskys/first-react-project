const OfferPopup = () => {

    let popupOffer = ''

    return (
        <>
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
                        <h3 className="modal-title">Shark Point Snorkelling</h3>
                        <p className="modal-price">&#40;min. 2 persons - $65/person&#41;</p>
                        <p className="modal-full-price">$130 Fulidhoo</p>
                        <div className="button-block">
                            <span className="button">Book Now</span>
                        </div>
                    </div>
                    <div className="description">
                        <h4 className="modal-description-title">Service Description</h4>
                        <p className="modal-description-text">Dive into the mesmerizing world of the ocean with our exhilarating "Swim with Sharks" tour! Embark on a unique adventure as you journey to a tropical paradise known for its crystal-clear waters and vibrant marine life. Your experience begins with a boat ride to a secluded cove where gentle nurse sharks gracefully glide beneath the surface.</p>
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

export default OfferPopup;