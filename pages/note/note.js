$(function(){
  function getBottom(el){
    const top =$(el).css('top')
    const height =$(el).height()
    return parseInt(top)+height
  }

  function getData(p){

    var url=`https://serverms.xin88.top/note?page=`+p
  $.get(url,data=>{
    // console.log(data);
    const li_w=242.5
    const space=10

    $('#note-items').html(
      data.data.map(value=>{
        const {cover,favorite,head_icon,title,name
        ,width,height
        }=value

        const img_h=li_w / width * height
        // console.log(img_h);

        return ` <li>
        <img style="height:${img_h}px" src="assets/img/note/${cover}" alt="">
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

    const arr=[]

    $('#note-items>li').each((i,el)=>{
      // el元素,i序号
      // console.log(i,el);
      if(i<4){
        $(el).css({top:0,left:i * (li_w + space)})
        arr.push(el)
      }else{ 
        let min_el =arr[0]
        for(let i=1;i<arr.length;i++){
          if(getBottom(arr[i])<getBottom(min_el)){
            min_el=arr[i]
          }
        }
        // console.log(min_el);
        $(el).css({
          left:$(min_el).css('left'),
          top:getBottom(min_el)+space
        })
        const index_min=arr.indexOf(min_el)
        // console.log(index_min);
        arr.splice(index_min,1,el)
        // console.log(arr);
      


      }
    
    })


    let max_el=arr[0]
    for(let i=0;i<arr.length;i++){
      if(getBottom(arr[i])>getBottom(max_el)){
        max_el=arr[i]
      }
    }
    $('#note-items').css('height',getBottom(max_el))
    // console.log($('#note-items').css('height'));


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
