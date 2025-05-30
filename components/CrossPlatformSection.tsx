import Image from "next/legacy/image"
import { T } from "./T"
import WaveBackground from "./WaveBackground"

const CrossPlatformSection = () => (

<>
<div id="cross-platform">
</div>

<WaveBackground colorFrom="#0f0163" colorTo="#0f0163" />

<section className="py-0" style={{background: 'linear-gradient(0deg, #380a74, #0f0163)'}}>
    <div className="container px-md-5">
        <div className="row justify-content-center">
            <div className="col-xl-8 text-center">
                <h1 className="display-3 text-white font-alt"><T i18nKey="crossPlatformSection_title" /></h1>
                <h3 className="text-white font-alt">Windows, MacOS, Linux, Android, iOS</h3>
            </div>
        </div>
        <div className="row justify-content-center">
            <hr className="bg-light mx-5"/>

            <div className="col-12 col-md-4">
                <div className="image-container" style={{height: '100%', position: 'relative'}}>
                    <Image src="img/platforms/svg/platforms-around-logo.svg" alt="platforms" layout="fill" />
                </div>
            </div>
            <div className="col-12 col-md-6 text-white lead">
                <p><T i18nKey="crossPlatformSection_p_1" /></p>

                <hr className="bg-light mx-5"/>

                <p><T i18nKey="crossPlatformSection_p_2" /></p>
                <p><T i18nKey="crossPlatformSection_p_3" /></p>
                
                <hr className="bg-light mx-5"/>

                <p><T i18nKey="crossPlatformSection_p_4" /></p>
                <p><T i18nKey="crossPlatformSection_p_5" /></p>
            </div>
        </div>
    </div>
</section>

<WaveBackground flipY={true} colorFrom="#380a74" colorTo="#380a74" />
</>
)

export default CrossPlatformSection