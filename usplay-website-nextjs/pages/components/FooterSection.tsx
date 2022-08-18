import SocialMediaLinks from "./SocialMediaLinks"

const FooterSection = () => (

<footer className="bg-black text-center py-4">
    <div className="container-fluid px-5">
        <div className="col-12 d-flex flex-row fs-4" style={{justifyContent: "space-between"}}>
            <div className="fw-bold text-muted font-alt" aria-hidden="true">UltraStar&nbsp;Play</div>
            <div className="container" style={{textAlign: "right"}}>
                <SocialMediaLinks />
            </div>
        </div>
    </div>
</footer>

)
    
export default FooterSection