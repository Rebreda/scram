//These TLDs are reserved and have specific meaning [rfc2606]
const RESERVED_TLDS = [
    `.test`,
    `.example`,
    `.invalid`,
    `.localhost`
]

const RESERVED_2LD = [
    `example.com`,
    `example.net`,
    `example.org`
]

const URI_REGEX = `^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?`
/**
* @Method: Checks if a string is a URL.
* @Param { string }
* @Return { boolean }
*/
export function isValid(url: string): boolean {
    const a = { b: true }
    const r = a?.b ? true : false
    console.log(r);

    if (!url) return false
    if (url.length <= 0) return false
    return true
}