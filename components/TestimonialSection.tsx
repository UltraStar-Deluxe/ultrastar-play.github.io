import Image from "next/legacy/image";
import { useTranslationUnescaped } from "../lib/utils";
import { T } from "./T";

const TestimonialSection = () =>
{
  const { t } = useTranslationUnescaped();

  return <>
    <section id="testimonial" className="people section-padding pt-0">
      <div className="container">
        <header className="text-center mb-1">
          <span className="bi bi-chat-quote display-3" />
          <h1 className="mt-4 font-weight-bold"><T i18nKey="testimonialSection_title" /></h1>
          {/* <h3 className="mt-3 lead text-muted">Hear from our happy players about their memorable moments and why they love the game.</h3> */}
        </header>

        <div className="row justify-content-md-center">
          <div className="col-md-5 col-lg-4 p-0 pt-3 px-2">
            <div className="card">
              <div className="card-body px-5 pt-5">
                <p>
                  Awesome kaoroke game, ultrastar tracks work here flawlessly the only thing I wish it had was playback for some laughs but overall would strongly recommend this!
                </p>
              </div>
              <div className="card-body mx-3">
                <div className="d-flex align-items-center">
                  <div className="bi bi-steam display-6" />
                  <div className="p-2">
                    <h4 className="mb-0">NevSC</h4>
                    <span className="text-muted">25.04.2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-5 col-lg-4 p-0 pt-3 px-2">
            <div className="card">
              <div className="card-body px-5 pt-5">
                <p>
                  This is a great game, I have it set up on a Steam Deck used as a console with SingStar microphones plugged in. You can find hundreds of songs online, or you can create your own.
                </p>
              </div>
              <div className="card-body mx-3">
                <div className="d-flex align-items-center mx-1">
                  <span className="bi bi-steam display-6" />
                  <div className="p-2">
                    <h4 className="mb-0">evilcartyen</h4>
                    <span className="text-muted">15.03.2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-5 col-lg-4 p-0 pt-3 px-2">
            <div className="card">
              <div className="card-body px-5 pt-5">
                <p>
                  Our Family and friend are having such a blast with this game and it&apos;s really more stable than all the other programs I tried. [...] Really great work and fun game.
                </p>
              </div>
              <div className="card-body mx-3">
                <div className="d-flex align-items-center mx-1">
                  <span className="bi bi-discord display-6" />
                  <div className="p-2">
                    <h4 className="mb-0">Schninsche</h4>
                    <span className="text-muted">04.11.2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-md-5 col-lg-4 p-0 pt-3 px-2">
            <div className="card">
              <div className="card-body px-5 pt-5">
                <p>
                  Thanks for the game! We had a lot of fun on new year.
                </p>
              </div>
              <div className="card-body mx-3">
                <div className="d-flex align-items-center">
                  <span className="bi bi-discord display-6 mx-1" />
                  <div className="p-3">
                    <h4 className="mb-0">MW</h4>
                    <span className="text-muted">01.01.2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </section>
  </>
}

export default TestimonialSection