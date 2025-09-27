function ScrollDown() {
    return(
        <>
            <div className="home__scroll">
                <a href="#about" className="home__scroll-button button--flex">
                    <i className="uil uil-mouse-alt" style={{ fontSize: "1.8rem" }}></i>
                    <span className="home__scroll-name">Scroll Down</span> 
                    <i className="uil uil-arrow-down home__scroll-arrow"></i>
                </a>
            </div> 
        </>
    )
}

export default ScrollDown