/**
 * Promise化小程序接口
 */
const api = (name, opts) => {
  return new Promise((success, fail) => {
    let obj = {
      ...opts,
      ...{
        success,
        fail
      }
    };
    wx[name](obj);
  });
}
 
module.exports = {
  api
}