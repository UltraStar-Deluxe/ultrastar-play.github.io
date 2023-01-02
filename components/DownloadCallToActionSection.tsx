import Image from "next/image"
import { T } from "./T"

const DownloadCallToActionSection = () =>
{
    return <>
    <section className="" id="download">
        <div className="container px-5">
            <h1 className="text-center font-alt mb-4"><T i18nKey="downloadCallToActionSection_title" /></h1>
            {/* Buttons  */}
            <div className="d-flex flex-column align-items-center flex-md-row justify-content-center">
                <a className="btn btn-primary btn-lg bg-gradient mb-2" href="https://github.com/UltraStar-Deluxe/Play/releases" target="_blank" rel="noreferrer" style={{width: "300px", marginLeft: "5px", marginRight: "5px"}}><T i18nKey="button_getUltraStarPlay" /></a>
                <a className="btn btn-primary btn-lg bg-gradient mb-2" href="https://github.com/UltraStar-Deluxe/Play/releases" target="_blank" rel="noreferrer" style={{width: "300px", marginLeft: "5px", marginRight: "5px"}}><T i18nKey="button_getCompanionApp" /></a>
            </div>
            <div className="d-flex flex-column align-items-center flex-md-row justify-content-center">
                <a className="btn btn-lg mb-2" href="https://play.google.com/store/apps/details?id=com.ultrastar.UltraStarPlay" target="_blank" rel="noreferrer" style={{position: 'relative', width: "300px", height: '50px', marginLeft: "5px", marginRight: "5px"}}><Image src="img/buttons/Google_Play_Store_badge_main_game.svg" layout="fill" objectFit="contain"/></a>
                <a className="btn btn-lg mb-2" href="https://play.google.com/store/apps/details?id=com.ultrastar.UltraStarPlayCompanion" target="_blank" rel="noreferrer" style={{position: 'relative', width: "300px", height: '50px', marginLeft: "5px", marginRight: "5px"}}><Image src="img/buttons/Google_Play_Store_badge_companion_app.svg" layout="fill" objectFit="contain"/></a>
            </div>
        </div>
    </section>
</>

}

export default DownloadCallToActionSection
