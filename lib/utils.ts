import { useTranslation } from "next-i18next";

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

const useTranslationUnescaped = (ns: string = "common"): { t: GetTranslationFunction } =>
{
    const { t } = useTranslation(ns)
    const getTranslationFunction = (i18nKey: string, options: any = {}) =>
    {
        options.escapeValue = false;
        const rawTranslation = t(i18nKey, options)
        // Apply same replacements of T.tsx "components" attribute
        return rawTranslation
            .replaceAll("<gradient>", `<span class="text-gradient bold" />`)
            .replaceAll("</gradient>", `</span>`)
            .replaceAll("<emphasize>", `<span class="emphasize" />`)
            .replaceAll("</emphasize>", `</span>`)
            .replaceAll("&nbsp;", " ")
            .replaceAll("&amp;", "&")
            .replaceAll("&lt;", "<")
            .replaceAll("&gt;", ">")
            .replaceAll("&quot;", "\"")
            .replaceAll("&apos;", "'")
    }
    return { t: getTranslationFunction };
}

interface GetTranslationFunction
{
    (i18nKey: string, options?: any): string
}

export { tryParseInt, getVerticalScrollPercentage, doWithElement, setInnerHtml, useTranslationUnescaped }
