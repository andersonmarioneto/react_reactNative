import './header.css'

function Header(){
    return (
        <>
            <header className="header">
                <nav className="nav container">
                    <a href="index.html" className="nav__logo">Anderson</a>

                    <div className="nav__menu">
                        <ul className="nav__list grid">
                            <li className="nav__itrm">
                                <a href="#home" className="nav__link">
                                    <i className="uil uil-estate nav__icon"></i> Home
                                </a>
                            </li>

                            <li className="nav__itrm">
                                <a href="#about" className="nav__link">
                                    <i className="uil uil-user nav__icon"></i> Me
                                </a>
                            </li>

                            <li className="nav__itrm">
                                <a href="#skills" className="nav__link">
                                    <i className="uil uil-file-alt nav__icon"></i> Skills
                                </a>
                            </li>

                            <li className="nav__itrm">
                                <a href="#service" className="nav__link">
                                    <i className="uil uil-briefcase-alt nav__icon"></i> Services
                                </a>
                            </li>

                            <li className="nav__itrm">
                                <a href="#portfolio" className="nav__link">
                                    <i className="uil uil-scenery nav__icon"></i> Portfilio
                                </a>
                            </li>

                            <li className="nav__itrm">
                                <a href="#contact" className="nav__link">
                                    <i className="uil uil-message nav__icon"></i> Contratar
                                </a>
                            </li>
                        </ul>

                        <i class="uil uil-times nav__close"></i>
                    </div>

                    <div className="nav__toggle">
                        <i class="uil uil-apps"></i> 
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header