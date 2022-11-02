import { T } from "./T"

const PlannedFeaturesSection = () =>
{

    return <>
    <section id="planned-features" className="planned-features-background py-5">
        <div className="row mx-5 justify-content-center">
            <div className="col-12 col-md-8">
                <h2 className="text-white display-1 lh-1 mb-4 font-alt"><T i18nKey="plannedFeaturesSection_title"/></h2>
                <ul className="text-white fs-3 font-alt">
                    <li><T i18nKey="plannedFeaturesSection_plannedFeature_1"/></li>
                    <li><T i18nKey="plannedFeaturesSection_plannedFeature_2"/></li>
                    <li><T i18nKey="plannedFeaturesSection_plannedFeature_3"/></li>
                    <li><T i18nKey="plannedFeaturesSection_plannedFeature_4"/></li>
                    <li><T i18nKey="plannedFeaturesSection_plannedFeature_5"/></li>
                    <li><T i18nKey="plannedFeaturesSection_plannedFeature_6"/></li>
                    <li>&hellip;</li>
                </ul>

                <p className="text-white fs-4 font-alt" style={{background: 'linear-gradient(90deg, #00000000, #00000099, #00000000)'}}>
                    <T i18nKey="plannedFeaturesSection_detail" /></p>
            </div>
        </div>
    </section>
</>

}

export default PlannedFeaturesSection