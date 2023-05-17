$(function(){
  // console.log(1);
  $('.you>div').children().eq(0).show()

  $('.zuo>ul').on('click','>li',function(){
    $(this).addClass('active').siblings().removeClass('active')
    $('.you>div').eq($(this).index()).show().siblings().hide()

  })
  // console.log(2);
  // console.log($('.zuo>ul').children().eq(0));
  $('.zuo>ul').children().eq(0).click()
  $('.you>div').children().eq(0).show()

  
})