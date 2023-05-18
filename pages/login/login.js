$(function(){
	//console.log(1)

  let switchCtn =document.querySelector("#switch-cnt");
  // console.log(switchctn);
  let switchC1 =document.querySelector("#switch-c1"); 
  let switchC2 =document.querySelector("#switch-c2");
  let switchCircle = document.querySelectorAll(".switch_circle"); 
  let switchBtn =document.querySelectorAll(".switch-btn"); 
  let aContainer = document.querySelector("#a-container");
  let bContainer =document.querySelector("#b-container"); 
  let allButtons = document.querySelectorAll(".submit");
  
  // let getButtons =(e) => e.preventDefault()
  // console.log(getButtons);
  // console.log(user.value);
 
  let changeForm =(e) => {
  // 修改类名
    switchCtn.classList.add("is-gx"); 
    setTimeout(function () {
    switchCtn.classList.remove("is-gx");},1500);
    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");
    switchC1.classList.toggle("is-hidden"); 
    switchC2.classList.toggle("is-hidden"); 
    aContainer.classList.toggle("is-txl"); 
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z");
    // console.log(1);
  }
  //点击切换
  // let shell = (e) => {
  //   console.log(e);
  //   for (var i = 0; i < allButtons.length; i++)
  //   allButtons[i].addEventListener("click",getButtons); 
  //   for(var i = 0; i < switchBtn.length; i++)
  //   switchBtn[i].addEventListener("click",changeForm);
  // }
  // window.addEventListener("load", shell);
  $('.switch-btn').click(function(){
    changeForm()
  })
  $('.submit').click(function(){
    if($(this).parent().prop('id')=='a-form'){
      let uname=$(this).parent().children('input').eq(0).val();
      let uemail=$(this).parent().children('input').eq(1).val();
      let upwd=$(this).parent().children('input').eq(2).val();
       console.log(uname,uemail,upwd);
			
			// $('.switch-btn').click()
      // console.log(1);
      var url=`https://serverms.xin88.top/users/register`
      $.post(url,{phone:uname,pwd:upwd},data=>{
					if(data.code==200){
						alert('注册成功')
						changeForm()
					}
      })

    }else{
      let uname=$(this).parent().children('input').eq(0).val();
      let upwd=$(this).parent().children('input').eq(1).val();
      // console.log(uname,upwd);

      var url=`https://serverms.xin88.top/users/login`
      $.post(url,{phone:uname,pwd:upwd},function(data){
				// console.log(data);
				if(data.code==200){
					// alert(data.msg)
					 const user = JSON.stringify(data.data)
					  sessionStorage.setItem('user', user)
						
					// sessionStorage.setItem('user',user)
					location.assign("#p=home")
					location.reload("#p=home")
					window.updateuser()
					// location.reload('#p=home')
					
					
					// let user = sessionStorage.getItem('user') || localStorage.getItem('user')
					//  if (user) {
					//    $('.login').hide().next().show()
					//    user = JSON.parse(user)
					// 			console.log(user);
					//    const { avatar, phone } = user
					//    $('.user>span').html(phone)
					// 			$('.user>img').attr('src',avatar);
								
					//  } else {
					//    $('.login').show().next().hide()
					//  }
					
					
					// location.href='#p=home'
					
					// let userinfo=JSON.parse(sessionStorage.getItem('user'))
					// let tj=sessionStorage.getItem('user')||localStorage.getItem('user')
					// console.log(tj);
					// if(tj){
					// 	$('.login').hide().next().show()
					// 	$('.user>span').html(userinfo.phone)
					// }else{
					// 	$('.login').show().next().hide()
					// }
					
					console.log($('a').filter('[class="login"]'));
					
					 
	// 				$('#header>.base-width').append(`	<div onclick="location.assign('#p=profile')" class="user">
	// 	<img src="${userinfo.avatar}" alt="">
	// 	<span>${userinfo.phone}</span>
	// </div>`)
				}
			},"json")
        // console.log(data);

      // console.log(2);
    }

  })

})
