import { useTranslation } from "next-i18next"
import { UseTranslationOptions } from "react-i18next"

interface Mapping<Key, Value>
{
    [index: string]: Value;
}

const tryParseInt = (text: string, fallbackValue: number): number =>
{
    try
    {
        return parseInt(text) || fallbackValue
    }
    catch(e)
    {
        return fallbackValue;
    }
}

const getVerticalScrollPercentage = (element: HTMLElement) =>
{
    const parentElement = element.parentElement
    if (!parentElement)
    {
        return 0;
    }

    return (element.scrollTop || parentElement.scrollTop)
         / (parentElement.scrollHeight - parentElement.clientHeight )
}

const doWithElement = (id: string, action: (element: HTMLElement) => void) =>
{
    if (typeof document !== "undefined"
        && document)
    {
        const element = document.getElementById(id)
        if (element)
        {
            action(element);
        }
        else
        {
            console.error("doWithElement: No element found with id " + id)
        }
    }
}

const setInnerHtml = (id: string, innerHtml: string) =>
{
    doWithElement(id, (element) => element.innerHTML = innerHtml)
}

const decodeHtml = (input: string): string =>
{
    return input
        .replaceAll("&nbsp;", " ")
        .replaceAll("&apos;", "'")
        .replaceAll("&amp;", "&")
        .replaceAll("&colon;", ":")
}

export { tryParseInt, getVerticalScrollPercentage, doWithElement, setInnerHtml, decodeHtml }
