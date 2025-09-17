import React, { useState } from "react"
import './header.css'

function Header(){
    /* Toggle Menu */
    const[Toggle, showMenu] = useState(false)

    return (
        <>
            <header className="header">
                <nav className="nav container">
                    <a href="index.html" className="nav__logo">Anderson</a>

                    <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                        <ul className="nav__list grid">
                            <li className="nav__item">
                                <a href="#home" className="nav__link active-link">
                                    <i className="uil uil-estate nav__icon"></i> Home
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#about" className="nav__link">
                                    <i className="uil uil-user nav__icon"></i> Me
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#skills" className="nav__link">
                                    <i className="uil uil-file-alt nav__icon"></i> Skills
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#service" className="nav__link">
                                    <i className="uil uil-briefcase-alt nav__icon"></i> Services
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#portfolio" className="nav__link">
                                    <i className="uil uil-scenery nav__icon"></i> Portfilio
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#contact" className="nav__link">
                                    <i className="uil uil-message nav__icon"></i> Contratar
                                </a>
                            </li>
                        </ul>

                        <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                    </div>

                    <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                        <i class="uil uil-bars"></i> 
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header