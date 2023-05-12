$(function(){
  $('.search>input').val($.hash('kw'))

  $('.search>input').keyup(function(e){
    if(e.keyCode==13){
      $('.search>button').click()
    }
    
    // $(this).css('color','red')
  })  


  $('.search>button').click(function(){
    const kw=$('.search>input').val()
    location.hash='#p=search&kw='+kw
  })
  
})