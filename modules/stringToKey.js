module.exports = function (string, private = false) {
    const obj = {
        n: string.split(`:`)[0]
    }
    obj[private ? `d` : `e`] = string.split(`:`)[1]
    return obj
}