function Texto({page}) {
    
    let nome = "Anderson Mário Neto";
    const urlImg = "https://images.icon-icons.com/2415/PNG/512/react_original_wordmark_logo_icon_146375.png"

    return (
        <>
            <div>
                <img width="100px" src={urlImg} />
                <h1>{page} page, do {nome}.</h1>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </>
    );
}

export default Texto;