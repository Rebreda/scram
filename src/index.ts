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

const URI_REGEX = /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/gi;

/**
* @Method: Checks if a string is a URL.
* @Param { string }
* @Return { boolean }
*/
export function isValid(url: string): boolean {
    if (!url) return false
    if (url.length <= 0) return false
    const matches = url.match(URI_REGEX);
    if (!matches) return false
    return true
}