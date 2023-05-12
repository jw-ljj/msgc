$(function(){

  function getData(p){
    var url=`https://serverms.xin88.top/mall?page=`+p
    $.get(url,data=>{
      // console.log(data.data);
      $('#goods-items').html(
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
      const {page,pageCount}=data
      let start =page-2
      let end=page+2
      if(start<1){
        start=1
        end=start+4
      }
      if(end>pageCount){
        end=pageCount
        start=end-4
      }
      $(window).scrollTop(0)

      page==1?$('.pages>button').eq(0).hide():$('.pages>button').eq(0).show()
      page==pageCount?$('.pages>button').eq(1).hide():$('.pages>button').eq(1).show()

      $('.pages>ul').empty()
      for(let i=start;i<=end;i++){
        $('.pages>ul').append(`<li class="${page==i?"active":""}">${i}</li>`)
      }

    })
  }
 getData(1)

 $(".pages>ul").on('click','>li',function(){
  getData($(this).html())
 })
 $('.pages>button').eq(0).click(function(){
    $('.pages>ul>li.active').prev().click()
 })
 $('.pages>button').eq(1).click(function(){
  $('.pages>ul>li.active').next().click()
  
 })
})