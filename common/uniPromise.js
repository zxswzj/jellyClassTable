/**
 * uniPromise
 * */
const uniPromise = param => {
    return (object = {}) => {
        return new Promise((resolve, reject) => {
            object.success = res => resolve(res)
            object.fail = res => reject(res)
            param(object)
        })
    }
}
 
module.exports = {
    uniPromise
}