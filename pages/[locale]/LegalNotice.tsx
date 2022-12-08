import type { NextPage } from 'next'
import BackToHomeNavigationSection from '../../components/BackToHomeNavigationSection';
import FooterSection from '../../components/FooterSection';
import { useTranslationUnescaped } from '../../lib/utils';

// Load translations (see https://github.com/i18next/next-language-detector/tree/main/examples/basic)
import { makeStaticProps } from '../../lib/getStatic'
import { getStaticPaths } from '../../lib/getStatic'
const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }

const LegalNotice: NextPage = () => {
    const { t } = useTranslationUnescaped()

  return (

<>
    <BackToHomeNavigationSection title={ `UltraStar Play - ${t("page_legalNotice")}` }/>
    
    {/* Basic features section */}
    <section className="bg-light">
        <div className="container px-5">
            <div className="row align-items-center justify-content-center justify-content-lg-between">
                <div className="col-12">
                    <p>The following information (Impressum) is required under German law.</p>
                    
                    <h1>Impressum</h1>

                    <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
                    <p>Andreas Stange<br />
                    Rambergstra&szlig;e 10<br />
                    30161 Hannover</p>

                    <h2>Kontakt</h2>
                    <p>Telefon: 01575-2873216<br />
                    E-Mail: email@ultrastar-play.com</p>

                    <p>Quelle: <a href="https://www.e-recht24.de">eRecht24</a></p>
                </div>
            </div>
        </div>
    </section>
    
    <FooterSection />
</>

  )
}

export default LegalNotice;
