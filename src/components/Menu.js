import React, { useState } from 'react'
import { BiShoppingBag } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { data } from './data'
import {Link} from 'react-router-dom'
import {useGlobleContext} from './Context'

export default function Menu() {
    
    const { showMenu, setShowMenu, amount } = useGlobleContext()
    const[ clickValue, setclickValue ] = useState(0);
    const[ menu, setMenu ] = useState(data.dataMenu);
    const [ menuScroll, setMenuScroll ] = useState(false)
    
    const changeBackground = () =>{
        if ( window.scrollY > 200){
            setMenuScroll(false)
        }else setMenuScroll(true)
    }
    window.addEventListener('scroll',changeBackground)

    return (
        <header className={`l-header ${menuScroll===false  && `scroll-header`}`} id="header">
            <nav className="nav bd-grid">
                <div className="nav__toggle"  id="nav-toggle">
                    <BiMenu onClick={() => { setShowMenu(!showMenu) }}/>
                </div>

                <Link to="/" className="nav__logo">BinhDZ</Link>

                <div className={`nav__menu ${showMenu && `show`}`} id="nav-menu">
                    {/* nếu showMenu === true thì thêm show không thì xóa show */}
                    <ul className="nav__list">                       
                        {menu.map((item,index)=>{                           
                            return <li key={index} className="nav__item">                                
                                        <a href={`#${item}`} 
                                            className={ index===clickValue   ? "nav__link active" : "nav__link" }                                     
                                            onClick={() =>setclickValue(index)}>
                                            <Link to={`${ index<4 ? `/` : `/products`}`}> {item}</Link>
                                        </a>                                     
                                    </li>   
                        })}
                    </ul>
                </div>

                <div className="nav__shop">
                    <Link to="/cart"><BiShoppingBag/></Link>
                   <div className="nav__shop-amount">
                       <h3 className="nav__shop__amount-number">{amount}</h3>
                   </div>
                </div>
            </nav> 
        </header>
    )
}

