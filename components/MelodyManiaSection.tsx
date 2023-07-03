import { useEffect } from "react"
import { setInnerHtml, useTranslationUnescaped } from "../lib/utils"
import { T } from "./T"
import Image from "next/legacy/image"

const MelodyManiaSection = () =>
{
    const { t } = useTranslationUnescaped()
    useEffect(() => 
    {
        const melodyManiaLink = `<a href="https://melodymania.org/melody-mania-vs-ultrastar-play">Melody Mania</a>`;
        setInnerHtml('melodyManiaSection_detail', t("melodyManiaSection_detail", {
            melodyManiaLink: melodyManiaLink
        }))
    })

    return <>
    <section id="melody-mania" className="melody-mania-background py-5">
        <div className="row mx-5 justify-content-center">
            <div className="col-12 col-md-8">
                <h2 className="text-white display-1 lh-1 mb-4 font-alt"><T i18nKey="melodyManiaSection_title"/></h2>
                <ul className="text-white fs-3 font-alt">
                    <li><T i18nKey="melodyManiaSection_feature_1"/></li>
                    <li><T i18nKey="melodyManiaSection_feature_2"/></li>
                    <li><T i18nKey="melodyManiaSection_feature_3"/></li>
                    <li><T i18nKey="melodyManiaSection_feature_4"/></li>
                    <li><T i18nKey="melodyManiaSection_feature_5"/></li>
                    <li><T i18nKey="melodyManiaSection_feature_6"/></li>
                    <li>&hellip;</li>
                </ul>

                <p id="melodyManiaSection_detail" className="text-white fs-4 font-alt" style={{background: 'linear-gradient(90deg, #00000000, #00000099, #00000000)'}}></p>

                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                    <a className="btn btn-lg mb-2" href="https://store.steampowered.com/app/2394070/Melody_Mania/" rel="noreferrer" style={{position: 'relative', width: "300px", height: '100px', marginLeft: "5px", marginRight: "5px"}}><Image src="img/buttons/Steam-BuyButton.svg" layout="fill" objectFit="contain" alt="Buy on Steam button"/></a>
                    {/* <iframe src="https://store.steampowered.com/widget/2394070/" width="646" height="190"></iframe> */}
                </div>
            </div>
        </div>
    </section>
</>

}

export default MelodyManiaSection