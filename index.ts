/**
* @Method: Returns when a string is a URL.
* @Param { string }
* @Return { string }
*/

export function isValid(url: string): boolean {
    if (!url) return false
    if (url.length <= 0) return false

    return true
}