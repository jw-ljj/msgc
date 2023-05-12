$(function(){
let nowPage=1
let lock=false
  function getData(p){

    if($('.nomore:visible').length==1) return

    if(lock==true) return
    lock=true
    var url=`https://serverms.xin88.top/mall?page=`+p
    $.get(url,data=>{
      lock=false
      // console.log(data.data);
      $('#goods-items').append(
        data.data.map(value=>{
          const {pic,price,name,sale_count}=value
          return ` <li>
          <img src="assets/img/mall/${pic}" alt="">
          <p>${name}</p>
          <span>￥${price}</span>
          <i>月售${sale_count}</i>
        </li>`
        })
      )
      // a+=1
      const {page,pageCount}=data
      nowPage=page
      if(page==pageCount){
        $('.loading').hide()
        $('.nomore').show()
      }
      // console.log(nowPage);
      // let start =page-2
      // let end=page+2
      // if(start<1){
      //   start=1
      //   end=start+4
      // }
      // if(end>pageCount){
      //   end=pageCount
      //   start=end-4
      // }
      // $(window).scrollTop(0)

      // page==1?$('.pages>button').eq(0).hide():$('.pages>button').eq(0).show()
      // page==pageCount?$('.pages>button').eq(1).hide():$('.pages>button').eq(1).show()

      // $('.pages>ul').empty()
      // for(let i=start;i<=end;i++){
      //   $('.pages>ul').append(`<li class="${page==i?"active":""}">${i}</li>`)
      // }

    })
  }
 getData(1)

 $(window).scroll(function(){
  const top=$(window).scrollTop()
  const win_h=$(window).height()
  const dom_h=$(document).height()
  const bottom=dom_h-win_h
  // console.log(bottom);
  if(top>bottom-200){
    // alert('到底了')
    
    getData(nowPage+1)
  }
  
})

 

//  $(".pages>ul").on('click','>li',function(){
//   getData($(this).html())
//  })
//  $('.pages>button').eq(0).click(function(){
//     $('.pages>ul>li.active').prev().click()
//  })
//  $('.pages>button').eq(1).click(function(){
//   $('.pages>ul>li.active').next().click()
  
//  })
})