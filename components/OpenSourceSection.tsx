import { useEffect } from "react";
import { setInnerHtml, useTranslationUnescaped } from "../lib/utils";
import { T } from "./T"

const OpenSourceSection = () => 
{
    const { t } = useTranslationUnescaped()
    const githubLink = `<a href="https://github.com/UltraStar-Deluxe/Play#how-to-contribute">GitHub</a>`;
    const madeWithUnityLink = `<a href="https://unity.com/madewith">${ t("openSourceSection_madeWithUnity_name") }</a>`;
    const paperLink = `<a href="https://ieee-cog.org/2020/papers/paper_308.pdf">Singing with an Angry-Birds-like Game</a>`;
    useEffect(() =>
    {
        setInnerHtml("openSourceSection_p_getInvolved", t("openSourceSection_p_getInvolved", {
            githubLink: githubLink,
        }))

        setInnerHtml("openSourceSection_madeWithUnity_p_2", t("openSourceSection_madeWithUnity_p_2", {
            madeWithUnityLink: madeWithUnityLink
        }))

        setInnerHtml("openSourceSection_beyondThisGame_p_3", t("openSourceSection_beyondThisGame_p_3", {
            paperLink: paperLink
        }))
    })

    return <>
    <section id="open-source">
        <div className="container px-md-5">
            <div className="row justify-content-center">
                <div className="col-xl-8 text-center">
                    <h1 className="font-alt"><span className="bi-gear-fill" />&nbsp;<T i18nKey="openSourceSection_title" />&nbsp;<span className="bi-tools"/></h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-md-8">
                    <hr className="bg-light"/>
                    <p id="openSourceSection_p_getInvolved">{ /* content set in useEffect */}</p>

                    <h2 className="font-alt text-center"><T i18nKey="openSourceSection_whyOpenSource_title" /></h2>
                    <p><T i18nKey="openSourceSection_whyOpenSource_p_1" /></p>
                    <p><T i18nKey="openSourceSection_whyOpenSource_p_2" /></p>

                    <h2 className="font-alt text-center"><T i18nKey="openSourceSection_madeWithUnity_title" /></h2>
                    <p><T i18nKey="openSourceSection_madeWithUnity_p_1" /></p>
                    <p id="openSourceSection_madeWithUnity_p_2">{ /* content set in useEffect */}</p>

                    <h2 className="font-alt text-center"><T i18nKey="openSourceSection_beyondThisGame_title" /></h2>
                    <p><T i18nKey="openSourceSection_beyondThisGame_p_1" /></p>
                    <p><T i18nKey="openSourceSection_beyondThisGame_p_2" /></p>
                    <p id="openSourceSection_beyondThisGame_p_3">{ /* content set in useEffect */}</p>
                </div>
            </div>
        </div>
    </section>
</>
}

export default OpenSourceSection