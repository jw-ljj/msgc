$(function(){
  var url=`https://douyu.xin88.top/api/room/list?page=1&type=ms`
  $.get(url,data=>{
    console.log(data.data.list);
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
  })
})