// 验证邮箱
function checkEmail(myemail) {
  // 规则
  var myReg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
  // 判断值是否符合规则
  if (myReg.test(myemail)) {
    return true;
  } else {
    return false;
  }
}
// 验证手机号码
function checkPhone(phone) {
  if (!(/^1[34578]\d{9}$/.test(phone))) {
    return false;
  } else {
    return true;
  }
}

// 判断是否登录
function isLogin(userInfo){
  // 是否登录
  if(sessionStorage.getItem(userInfo)){
    const email = JSON.parse(sessionStorage.getItem(userInfo))[0].email;
    $('.logining').html(`你好 ${email} <a class="logout" href="javascript:;">退出</a>`)
    
  }else{
    $('.am-dropdown').removeClass('unvisibile')
    $('.logining').addClass('unvisibile')
  }

  // 退出登录
  $('.logining').on('click','.logout',function(){
    sessionStorage.removeItem('userInfo');
    location.href='/'
  })
}
// exports.checkEmail = (myemail) => {
//   // 规则
//   var myReg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
//   // 判断值是否符合规则
//   if (myReg.test(myemail)) {
//     return true;
//   } else {
//     return false;
//   }
// }