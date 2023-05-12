$(function(){

  function getData(p){

    var url=`https://serverms.xin88.top/note?page=`+p
  $.get(url,data=>{
    // console.log(data);

    $('#note-items').html(
      data.data.map(value=>{
        const {cover,favorite,head_icon,title,name}=value
        return ` <li>
        <img src="assets/img/note/${cover}" alt="">
        <p class="lh">${title}</p>
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
    const {page,pageCount}=data
    let start =page-2
     let end =page+2
     if(start<1){
      start=1
      end=page+4
     }
     if(end>pageCount){
      end=pageCount
      start=end-4
     }

      $('.pages>ul').empty()

    for(let i=start;i<=end;i++){
      $('.pages>ul').append(`<li class="${page==i?'active':''}">${i}</li>`)

      $(window).scrollTop(0)

      const $btn_prev=$('.pages>button').eq(0)
      const $btn_next=$('.pages>button').eq(1)
      page==1?$btn_prev.hide():$btn_prev.show()
      page==pageCount?$btn_next.hide():$btn_next.show()
      
    }

  })

  }

  getData(1)
  
  $('.pages>ul').on('click','>li',function(){
    // console.log($(this).html());
    getData($(this).html())
    // $(this).addClass('active').siblings().removeClass('active')
    
  })

  $('.pages>button').eq(0).click(function(){
    $('.pages>ul>li.active').prev().click()
  })
  $('.pages>button').eq(1).click(function(){
    $('.pages>ul>li.active').next().click()
    
  })



})
