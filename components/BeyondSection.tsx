import { useEffect } from "react"
import { useUnescapedTranslations, setInnerHtml, useTranslationUnescaped } from "../lib/utils"
import { T } from "./T"

const BeyondSection = () =>
{
    const { t } = useTranslationUnescaped()

    return <>
    <section id="planned-features" className="planned-features-background py-5">
        <div className="row mx-5 justify-content-center">
            <div className="col-12 col-md-8">
                <h2 className="text-white display-1 lh-1 mb-4 font-alt"><T i18nKey="beyondSection_title"/></h2>
                
                <p className="text-white fs-4 font-alt" style={{background: 'linear-gradient(90deg, #00000000, #00000099, #00000000)'}}><T i18nKey="beyondSection_detail"/></p>

                <ul className="text-white fs-3 font-alt">
                    { useUnescapedTranslations("beyondSection_feature_<index>")
                        .map(plannedFeature => <li>{plannedFeature}</li>) }
                    <li>&hellip;</li>
                </ul>

                <p className="text-white fs-4 font-alt" style={{background: 'linear-gradient(90deg, #00000000, #00000099, #00000000)'}}><T i18nKey="beyondSection_callToAction"/></p>
            </div>
        </div>
    </section>
</>

}

export default BeyondSection