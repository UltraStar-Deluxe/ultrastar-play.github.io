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

export { tryParseInt, getVerticalScrollPercentage }