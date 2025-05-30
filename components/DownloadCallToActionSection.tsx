import Image from "next/legacy/image"
import { T } from "./T"

const DownloadCallToActionSection = () =>
{
    return <>
    <section className="" id="download">
        <div className="container px-5">
            <h1 className="text-center font-alt mb-4"><T i18nKey="downloadCallToActionSection_title" /></h1>
            {/* Buttons */}
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                <a className="btn btn-lg mb-2" href="https://store.steampowered.com/app/2394070/Melody_Mania/" rel="noreferrer" style={{position: 'relative', width: "300px", height: '80px', marginLeft: "5px", marginRight: "5px"}}></a>
            </div>
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                <a className="btn btn-lg mb-2" href="https://play.google.com/store/apps/details?id=com.ultrastar.UltraStarPlayCompanion" target="_blank" rel="noreferrer" style={{position: 'relative', width: "300px", height: '80px', marginLeft: "5px", marginRight: "5px"}}><Image src="img/buttons/Google_Play_Store_badge_companion_app.svg" layout="fill" objectFit="contain" alt="Companion App on Google Play button"/></a>
                {/* <a className="btn btn-lg mb-2" href="https://apps.apple.com/us/app/melody-mania-companion/id6476068878" target="_blank" rel="noreferrer" style={{position: 'relative', width: "300px", height: '80px', marginLeft: "5px", marginRight: "5px"}}><Image src="img/buttons/AppleAppStore_CompanionAppBadge.svg" layout="fill" objectFit="contain" alt="Companion App on App Store button"/></a> */}
            </div>
        </div>
    </section>
</>

}

export default DownloadCallToActionSection
