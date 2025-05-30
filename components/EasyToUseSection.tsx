import { T } from "./T"

const EasyToUseSection = () =>
{
    return <>
    <section className="pt-3">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-auto">
                    <h1><T i18nKey="easyToUseSection_title"/></h1>
                </div>
            </div>
            <div className="row justify-content-center lead text-muted">
                <div className="col-12 col-md-8">
                    <p><T i18nKey="easyToUseSection_p_beforeList" /></p>
                    <ul>
                        <li><T i18nKey="easyToUseSection_list_1" /></li>
                        <li><T i18nKey="easyToUseSection_list_2" /></li>
                        <li><T i18nKey="easyToUseSection_list_3" /></li>
                    </ul>
                    <p><T i18nKey="easyToUseSection_p_afterList" /></p>
                </div>
            </div>
        </div>
    </section>
</>

}

export default EasyToUseSection