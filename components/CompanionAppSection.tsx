import Image from "next/legacy/image";
import { useTranslationUnescaped } from "../lib/utils";
import { T } from "./T";

const CompanionAppSection = () =>
{
  const { t } = useTranslationUnescaped();

  return <>
    <section id="companion-app" className="masthead" style={{ backgroundColor: '#ffffff' }}>
      <div className="container px-5">
        <div className="row gx-5 align-items-center">
          <div className="col-lg-6">
            {/* <!-- Mashead text and app badges--> */}
            <div className="mb-5 mb-lg-0 text-center text-lg-start">
              <h1 className="display-3 lh-1 mb-3"><T i18nKey="companionAppSection_title" /></h1>
              <div className="text-muted">
                <p className="lead fw-normal text-muted mb-5"><T i18nKey="companionAppSection_p" /></p>
                <ul>
                  <li><T i18nKey="companionAppSection_feature_microphone"/></li>
                  <li><T i18nKey="companionAppSection_feature_sonqQueue"/></li>
                  <li><T i18nKey="companionAppSection_feature_remoteControl"/></li>
                  <li><T i18nKey="companionAppSection_feature_easySetup"/></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            {/* <!-- Masthead device mockup feature--> */}
            <div className="masthead-device-mockup">
              <svg className="circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" transform="scale(0.8)">
                <defs>
                  <linearGradient id="circleGradient" gradientTransform="rotate(45)">
                    <stop className="gradient-start-color" offset="0%"></stop>
                    <stop className="gradient-end-color" offset="100%"></stop>
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg className="shape-1 d-none d-sm-block" viewBox="0 0 240.83 240.83" xmlns="http://www.w3.org/2000/svg">
                <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(120.42 -49.88) rotate(45)"></rect>
                <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(-49.88 120.42) rotate(-45)"></rect>
              </svg>
              <svg className="shape-2 d-none d-sm-block" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <div className="device-wrapper" style={{ maxWidth: '200px' }}>
                <div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                  <Image src="img/companion-app-mic.png" alt="Companion App microphone" layout="fill" objectFit="contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default CompanionAppSection