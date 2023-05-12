$(function(){

  function getData(p){

    var url  =`https://serverms.xin88.top/video?page=`+p
    $.get(url,data=>{
      console.log(data);
      $('#menu-items').html(
        data.data.map(value=>{
          const {pic,duration,views,title}=value
          return `   <li>
          <div>
            <img src="assets/img/video/${pic}" alt="">
            <div>
              <span>${views}次播放</span>
              <span>${duration}</span>
            </div>
          </div>
          <p>${title}</p>
        </li>`
        })
      )
      //分页
  
      const {page,pageCount}=data

      $('.pages>ul').empty()

      let start=page-2
      let end=page+2
      if(start<1){
        start=1
        end=page+4
      }
      if(end>pageCount){
        end=pageCount
        start=end-4
      }

      for(let i=start;i<=end;i++){
        $('.pages>ul').append(`<li class="${page==i?'active':''}">${i}</li>`)

        $(window).scrollTop(0)

        const $btn_prev=$('.pages>button').eq(0)
        const $btn_next=$('.pages>button').eq(1)
        page==1?$btn_prev.hide():$btn_prev.show()
        page==pageCount?$btn_next.hide():$btn_next.show()
  
      }
      // if($('.pages li.active').html()==1){
      //   $('.pages>button').eq(0).attr('disabled',true)
      // }else{
      //   $('.pages>button').eq(0).attr('disabled',false)

      // }

      
     
    })

  }

 
  getData(1)
  
 
  //委托ul
  $('.pages>ul').on('click','>li',function(){
    const pno=$(this).html()
    console.log(pno);
    getData(pno)
   
  })

  //下一页
  $('.pages>button').eq(1).click(function(){
    $('.pages li.active').next().click()
    // if($('.pages li.active').html()>=1){
    //   $('.pages>button').eq(0).attr('disabled',false)
    // }
    // if($('.pages li.active').html()==19){
    //   $('.pages>button').eq(1).attr('disabled',true)
    // }
    
  })
  //prev
  $('.pages>button').eq(0).click(function(){
    $('.pages li.active').prev().click()
    // if($('.pages li.active').html()==1){
    //   $('.pages>button').eq(0).attr('disabled',true)
    // }
    // if($('.pages li.active').html()<=20){
    //   $('.pages>button').eq(1).attr('disabled',false)
    // }
  })
  

})