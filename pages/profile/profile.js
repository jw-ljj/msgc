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
	// console.log();
	let user = sessionStorage.getItem('user') || localStorage.getItem('user')
	// console.log(user);
	if(user){
		user = JSON.parse(user)
		const {phone,created,nickname,avatar } = user
		let date=new Date(created)
		    let m=moment(date).format('YYYY年MM月DD日 hh:mm:ss')

		
		// console.log();
		$('.you').children().eq(0).append(`
		<table>
						 <tr>
							 <td>会员名：</td>
							 <td>${nickname}</td>
						 </tr>
						 <tr>
							 <td>手机号：</td>
							 <td>${phone}</td>
						 </tr>
						 <tr>
						 					 <td>注册时间：</td>
						 					 <td>${m}</td>
						 </tr>
		</table>
		`)
		$('.you').children().eq(1).append(`    <img src="${avatar}" alt="">
		<button>确定</button>
`)
	}
	
  $('.you').children().eq(6).append(`<button>退出</button>`)
	$('.you>div:nth-child(7)>button').click(function(){
		// console.log(1);
		sessionStorage.removeItem('user')
		// alert("退出登录")
		location.assign("#p=home")
		location.reload("#p=home")
		
	})
	let url =`https://serverms.xin88.top/users/head_photos`
	$('.you').children().eq(1).append(`<div>
	<ul class="lists">
	
	</ul>
	</div>`)
	$.get(url,data=>{
		console.log(data);
		$('.lists').append(
		data.hero.map(value=>{
			// console.log(value);
			const {alias,selectAudio}=value
			return `<li data-au="${selectAudio}">
			  <img src="https://game.gtimg.cn/images/lol/act/img/champion/${alias}.png" alt="">
			</li>`
			
		}))
		
	
		// const {hero}=data
		
	})
	
	    
	     
	  let au=document.createElement('audio')
	$('.you>div:nth-child(2)>div>ul').on('click','>li',function(){
		// console.log($(this).data().au);
		au.src=$(this).data().au;
		au.play()
		// console.log(au);
		// console.log($(this).children().prop('src'));
		$('.you').children().eq(1).children().eq(1).prop('src',$(this).children().prop('src'))
		
	})
	$('.you').children().eq(1).children().eq(2).click(function(){
		// console.log(1);
		// $('.user>img').attr('src',$(this).prev().prop('src'));
		console.log(user);
		console.log($(this).prev().prop('src'));
		let img=$(this).prev().prop('src')
		user.avatar=$(this).prev().prop('src')
		let imgurl=`https://serverms.xin88.top/users/head_photo`
		// let user = sessionStorage.getItem('user')
		// console.log(user);
		
		$.post(imgurl,{alias:img,id:user.id},data=>{
			console.log(data);
		})
		sessionStorage.setItem('user',JSON.stringify(user))
		window.updateuser()
		
	})
	
})
