// function postJson(option) {
//   let str = ''
//   option.split('&').map(function (e) {
//     str = str + "," + e.split('=')[0] + ":'" + e.split('=')[1] + "'"
//   })
//   str = str.slice(1);
//   return str;
// }
// module.exports = postJson;
function postJson(option) {
  var str = [];
  var obj = {};
  str = option.split('&');
  str.forEach(function (v) {
    arr = v.split('=');
    obj[arr[0]] = arr[1];
  })
  return obj;
}
module.exports = postJson;