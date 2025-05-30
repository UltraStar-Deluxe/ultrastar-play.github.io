import { useEffect } from "react"
import { useUnescapedTranslations, setInnerHtml, useTranslationUnescaped } from "../lib/utils"
import { T } from "./T"

const PlannedFeaturesSection = () =>
{
    const { t } = useTranslationUnescaped()
    useEffect(() => 
    {
        setInnerHtml('plannedFeaturesSection_detail', t("plannedFeaturesSection_detail"))
    })

    return <>
    <section id="planned-features" className="planned-features-background py-5">
        <div className="row mx-5 justify-content-center">
            <div className="col-12 col-md-8">
                <h2 className="text-white display-1 lh-1 mb-4 font-alt"><T i18nKey="plannedFeaturesSection_title"/></h2>
                <ul className="text-white fs-3 font-alt">
                    { useUnescapedTranslations("plannedFeaturesSection_plannedFeature_<index>")
                        .map(plannedFeature => <li>{plannedFeature}</li>) }
                    <li>&hellip;</li>
                </ul>

                <p id="plannedFeaturesSection_detail" className="text-white fs-4 font-alt" style={{background: 'linear-gradient(90deg, #00000000, #00000099, #00000000)'}}></p>
            </div>
        </div>
    </section>
</>

}

export default PlannedFeaturesSection