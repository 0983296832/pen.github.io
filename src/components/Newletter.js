import React from 'react'

export default function Newletter() {
    return (
        <section className="newsletter section">
            <div className="newsletter__container bd-grid">
                <div>
                    <h3 className="newsletter__title">Susbcribe And Get <br /> 10% OFF</h3>
                    <p className="newsletter__description">Get 10% discount for all product</p>
                </div>
                <form action className="newsletter__susbcribe">
                    <input type="text" placeholder="email.com" className="newsletter__input" />
                    <a href="#" className="button">Susbcribe</a>
                </form>
            </div>
        </section>

    )
}
