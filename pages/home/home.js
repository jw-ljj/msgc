$(function(){
  
  var url=`https://serverms.xin88.top/index`
  $.get(url,data=>{
    console.log(data);
    $('.top-video>ul').html(
      data.hot_video.map(value=>{
        const {pic,vname}=value
        return ` <li>
        <img src="../../assets/img/${pic}" alt="">
        <p>${vname}</p>
        <span></span>     
       </li>`
      })
    )
    $('.today-hot>ul').html(
      data.today_hot.map(value=>{
        const {name,emphasize}=value
        return `<li class="${emphasize?"active":""}">${name}</li>`
      })
    )
  })

  $('.today-hot>ul').on('click','>li',function(){
    // console.log( $(this).html());
    // location.hash=`$p=search&wd=`+ $(this).html()
    $('.search>input').val($(this).html())
    $('.search>button').click()
    

  })
})