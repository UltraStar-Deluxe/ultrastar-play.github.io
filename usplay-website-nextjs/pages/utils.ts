import platform from "platform"

function isWindows(): boolean
{
    return (typeof platform !== "undefined"
                && platform.os?.family?.toLowerCase().includes("win") )
            || false
}

export default isWindows