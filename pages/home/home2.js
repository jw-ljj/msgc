$(function(){
  console.log($('.list1').html());
  $('.list1>ul').on('click','>li',function(){
    // $(this).mouseover(function(){
      console.log($(this));
    // })
  }) 
})