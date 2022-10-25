import { useEffect } from "react";
import { getVerticalScrollPercentage, tryParseInt } from "../utils";
import { getCookie, setCookie } from "../cookieUtils";

let doNotShowFormAgain = false;

const closeCountCookieName = "newsletterFormCloseCount";
const formSubmittedCookieName = "newsletterFormSubmitted";
let closeCount = 0;
const maxCloseCount = 3;

const showByDelayInMillis = 60000;
const showByScrollPercent = 0.33;

const getForm = (): HTMLFormElement =>
{
    return document.getElementById('getResponseNewsletterForm') as HTMLFormElement
}

const showForm = () => 
{
    if (doNotShowFormAgain)
    {
        return;
    }
    // Do not show again by other triggers while still on the page.
    doNotShowFormAgain = true;

    let newsletterForm = getForm();
    newsletterForm.classList.add('visible');
    newsletterForm.classList.remove('d-none');
}

const closeForm = () => 
{
    // Remember how often the form was closed.
    const newCloseCount = closeCount + 1;
    setCookie(closeCountCookieName, String(newCloseCount), 31)

    hideForm();
}

const hideForm = () =>
{
    let newsletterForm = getForm();
    newsletterForm.classList.remove('visible');
    newsletterForm.classList.add('d-none');
}

const onFormSubmit = () =>
{
    setCookie(formSubmittedCookieName, "true", 31);
    hideForm();
}

const GetResponseNewsletterForm = () =>
{
    useEffect(() => 
    {
        if (typeof window !== "undefined"
            && typeof document !== "undefined")
        {
            // Show if user stays on this page for some time.
            setTimeout(showForm, showByDelayInMillis)

            // Show if user scrolls down a certain percentage of the page.
            document.addEventListener('scroll', () =>
            {
                if (getVerticalScrollPercentage(document.body) >= showByScrollPercent)
                {
                    showForm();
                }
            })

            // Do not show newsletter again, if it was shown multiple times
            closeCount = tryParseInt(getCookie(closeCountCookieName), 0);
            if (closeCount > maxCloseCount)
            {
                console.log("Not showing newsletter form because it was closed too many times");
                doNotShowFormAgain = true;
            }

            // Do not show newsletter again, if the user already submitted the form
            if (getCookie(formSubmittedCookieName) === "true")
            {
                console.log("Not showing newsletter form because it was submitted already in the past");
                doNotShowFormAgain = true;
            }

            let newsletterForm = getForm();
            newsletterForm.onsubmit = onFormSubmit;
        }
    })

    return <form id="getResponseNewsletterForm" className="d-none" action="https://app.getresponse.com/add_subscriber.html" accept-charset="utf-8" method="post" target="_blank">
        {/* Close button */}
        <div className="bi bi-x-square align-self-end" onClick={closeForm}>
        </div>

        {/* Title and subtitle */}
        <h3 className="bold font-alt align-self-center">
            Get the Newsletter!
        </h3>
        <h5 className="align-self-center mb-3">
            Don't miss our Kickstarter campaign.
        </h5>

        {/* Email field (required) */}
        <input className="mb-3" type="text" name="email" placeholder="Email address" />

        {/* Subscriber button */}
        <input className="btn btn-primary" type="submit" value="SUBSCRIBE NOW"/>

        {/* Hidden fields */}
        {/* List token (get the token at: https://app.getresponse.com/campaign_list.html) */}
        <input type="hidden" name="campaign_token" value="f4cR2" />
        {/* Add subscriber to the follow-up sequence with a specified day (optional) */}
        <input type="hidden" name="start_day" value="0" />
    </form>
}

export default GetResponseNewsletterForm
