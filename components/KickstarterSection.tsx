import ImageCarousel from "./ImageCarousel"
import Typewriter from "typewriter-effect"
import SocialMediaLinks from "./SocialMediaLinks"
import { useEffect } from "react"
import { setInnerHtml, useTranslationUnescaped } from "../lib/utils"
import { T } from "./T"
import Image from "next/image"

const KickstarterSection = () =>
{
    const { t } = useTranslationUnescaped()

    const kickstarterName = "Kickstarter"
    useEffect(() => 
    {
        setInnerHtml('kickstarterSection_title', t("kickstarterSection_title", {
            "kickstarterLink": `<a class='text-light kickstarter-link' href='https://www.kickstarter.com/projects/anst/ultrastar-play'>${kickstarterName}</a>`,
        }))
    })

    return <>
    <section className="mt-5 pb-0 blue-to-darkblue-background text-light">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-auto">
                    {/* Mashead text and app badges */}
                    <h1 id="kickstarterSection_title" className="lh-1 mb-3 font-alt"></h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="image-container" style={{width: '100%', height: '80vh', maxHeight: '100%', position: 'relative'}}>
                        <a href="https://www.kickstarter.com/projects/anst/ultrastar-play">
                            <Image src="img/kickstarter-call-to-action.png" alt="platforms" layout="fill" objectFit="contain" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
}

export default KickstarterSection