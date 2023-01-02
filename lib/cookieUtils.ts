// See https://www.w3schools.com/js/js_cookies.asp
function setCookie(cookieName: string, cookieValue: string, expiresDays: number)
{
    if (typeof document === "undefined" || !document)
    {
        return null;
    }
    
    const d = new Date();
    d.setTime(d.getTime() + (expiresDays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function getCookie(cookieName: string)
{
    if (typeof document === "undefined" || !document)
    {
        return null;
    }

    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++)
    {
        let c = ca[i];
        while (c.charAt(0) == ' ')
        {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0)
        {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookie(cookieName: string)
{
    // Delete cookie by setting a past date as expiry date.
    setCookie(cookieName, '', -365);
}

export { setCookie, getCookie, deleteCookie };