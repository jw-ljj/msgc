$(function(){
  var url=`https://serverms.xin88.top/mall?page=1`
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
  })
})