import React from 'react'
import Connectionlist from './Connectionlist'
import Featuredlist from './Featuredlist'
import Womenlist from './Womenlist'
import Offer from './Offer'
import Newlist from './Newlist'
import Menu from './Menu'
import Newletter from './Newletter'
import Header from './Header'
import Slider from './Slider'
export default function Main() {
    return (
        <main className="l-main">
            <Menu />
            <Header />
            <Featuredlist />
            <Connectionlist />
            <Womenlist />
            <Offer />
            <Newlist />
            <Slider />
            <Newletter />
        </main> 
    )
}
