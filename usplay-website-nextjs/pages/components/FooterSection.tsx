const FooterSection = () => (

<footer className="bg-black text-center py-4">
    <div className="container-fluid px-5">
        <div className="col-12 d-flex flex-row fs-4" style={{justifyContent: "space-between"}}>
            <div className="fw-bold text-muted font-alt" aria-hidden="true">UltraStar&nbsp;Play</div>
            <div className="container" style={{textAlign: "right"}}>
                <a href="https://github.com/UltraStar-Deluxe/Play" className="mx-2">
                    <i className="bi bi-github" aria-hidden="true"></i>
                </a>
                <a href="https://discord.gg/PAUJFKCGbb" className="mx-2">
                    <i className="bi bi-discord" aria-hidden="true"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCr481bd1jFp5d9wixQecwVw" className="mx-2">
                    <i className="bi bi-youtube" aria-hidden="true"></i>
                </a>
                <a href="https://twitter.com/UltraStar_Play" className="mx-2">
                    <i className="bi bi-twitter" aria-hidden="true"></i>
                </a>
                <a href="https://www.facebook.com/UltraStar-Play-101984782475359" className="mx-2">
                    <i className="bi bi-facebook" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    </div>
</footer>

)
    
export default FooterSection