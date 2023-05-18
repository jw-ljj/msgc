$(function(){
	
	window.updateuser=function(){
		let user = sessionStorage.getItem('user') || localStorage.getItem('user')
		 if (user) {
		   $('.login').hide().next().show()
		   user = JSON.parse(user)
					console.log(user);
		   const { avatar, phone } = user
		   $('.user>span').html(phone)
					$('.user>img').attr('src',avatar);
					
		 } else {
		   $('.login').show().next().hide()
		 }
	}
	window.updateuser()	
	
	
	
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

  setInterval(() => {
  $('.base-width>img').toggleClass('active')    
  }, 2000);
	
	
	// $('a')
	 // console.log(userinfo);
  
})