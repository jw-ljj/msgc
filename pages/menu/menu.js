$(function(){
  var url  =`https://serverms.xin88.top/video?page=1`
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
  })
})