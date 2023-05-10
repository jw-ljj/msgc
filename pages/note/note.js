$(function(){
  var url=`https://serverms.xin88.top/note?page=1`
  $.get(url,data=>{
    // console.log(data.data);

    $('#note-items').html(
      data.data.map(value=>{
        const {cover,favorite,head_icon,title,name}=value
        return ` <li>
        <img src="assets/img/note/${cover}" alt="">
        <p>${title}</p>
        <div>
          <div>
            <img src="assets/img/note/${head_icon}" alt="">
            <span>${name}</span>   
          </div>
          <span>${favorite}</span>
        </div>  
      </li>`
      })
    )

  })
  

})
