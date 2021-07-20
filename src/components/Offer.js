import React, { useState } from 'react'
import { data } from './data'

export default function Offer() {
    const [ offer, setOffer ] = useState(data.dataOffer)
    return (
        <div className="offer section">
            <div className="offer__container bd-grid">
                <div className="offer__data">
                <h3 className="offer__title">{offer.offerTitle}</h3>
                <p className="offer__description">{offer.offerDescription}</p>
                <a href="#" className="button">Shop Now</a>
                </div>
                <img src={offer.offerImage} alt="" className="offer__img" />
            </div>
        </div>

    )
}
