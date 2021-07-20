import React, { useState } from 'react'
import Cartitem from './Cartitem'
import './Cart.css'
import {useGlobleContext} from './Context'

export default function Cart() {
    const { cartItem,total } = useGlobleContext() 
    if(cartItem.length === 0){
        return (<>
            <h1 className="ctitle-shop">SHOP</h1>
            <main className="cmain cbd-grid">
                <h1>Cart is empty</h1>
            </main>
            <hr className="cbd-grid"></hr>
             <div className="ccart__total cbd-grid">
                <h1 className="ctitle-shop">total</h1>
                <h1>$0</h1>
            </div>
        </>)
        } 
        return (
        <>
            <h1 className="ctitle-shop">SHOP</h1>
            <main className="cmain cbd-grid">
                {cartItem.map((item) =>{
                    return <Cartitem key={item.productId}{...item}/>
                    
                })}
            </main>
            <hr className="cbd-grid"></hr>
            <div className="ccart__total cbd-grid">
                <h1 className="ctitle-shop">total</h1>
                <h1>${total}</h1>
            </div>
            
        </>
    )
}
