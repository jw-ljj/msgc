$(function(){

  $('#add').click(function(){
    let addy=Number($(".pages>ul>li.active").html())+1
    var urla=`https://douyu.xin88.top/api/room/list?page=${addy}&type=ms`
    $.get(urla,data=>{
      $('#live-items').append(
        data.data.list.map(value=>{
        const {roomSrc,hn,nickname,roomName}=value
        return ` <li>
        <img src="${roomSrc}" alt="">
        <span>${hn}</span>
        <span>${nickname}</span>
        <p>${roomName}</p>
      </li>`
      }))
    })
  
  })

  function getData(p){
    var url=`https://douyu.xin88.top/api/room/list?page=${p}&type=ms`
  $.get(url,data=>{
    console.log(data.data);
    $('#live-items').html(
      data.data.list.map(value=>{
        const {roomSrc,hn,nickname,roomName}=value
        return ` <li>
        <img src="${roomSrc}" alt="">
        <span>${hn}</span>
        <span>${nickname}</span>
        <p>${roomName}</p>
      </li>`
      })
    )
    const {nowPage,pageCount}=data.data
    console.log({nowPage,pageCount});
    let start=nowPage-2
    let end =nowPage+2
    if(start<1){
      start=1
      end=start+4
    }
    if(end>pageCount){
      end=pageCount
      start=end-4
    }

    nowPage==1? $('.pages>button').eq(0).hide(): $('.pages>button').eq(0).show()
    nowPage==pageCount?$('.pages>button').eq(1).hide(): $('.pages>button').eq(1).show()
    $(window).scrollTop(0)

    $('.pages>ul').empty()
    for(let i=start;i<=end;i++){
      // console.log(i);
      $('.pages>ul').append(`<li class="${nowPage==i?"active":""}">${i}</li>`)
      
    }
  })
  }
  getData(1)
  $('.pages>ul').on('click','>li',function(){
    getData($(this).html())
  })

  $('.pages>button').eq(0).click(function(){
    $('.pages>ul>li.active').prev().click()
  })
  $('.pages>button').eq(1).click(function(){
    $('.pages>ul>li.active').next().click()
  })
})