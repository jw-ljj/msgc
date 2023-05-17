$(function(){
  // console.log();

  function getDate(){
    var url=`https://serverms.xin88.top/index`
    $.get(url,data=>{
      console.log(data);
      $('.top-video>ul').html(
        data.hot_video.map(value=>{
          const {pic,mp4,vname}=value
          // <img src="../../assets/img/${pic}" alt="">
          return ` <li class="video">
         
  
  <video poster="assets/img/${pic}" preload="" src="assets/video/${mp4}" ></video>
         
          <p>${vname}</p>
          <span></span>     
         </li>`
        })
      )
      
      $('.top-video>ul').on('click','>li',function(){
    
        $(this).toggleClass('active').siblings().removeClass('active')
        $(this).children(0).trigger('play')
        $('.video:not(.active)>video').trigger('pause')
    
        $(this).children(0).prop('muted',true)
        if($(this).hasClass('active')){

          $(this).children('span').hide()
          $(this).children('p').hide()
          $(this).siblings().children('span').show()
          $(this).siblings().children('p').show()
        }else{
          $(this).children('span').show()
          $(this).children('p').show()


        }
        
      })

      $('.today-hot>ul').html(
        data.today_hot.map(value=>{
          const {name,emphasize}=value
          return `<li class="${emphasize?"active":""}">${name}</li>`
        })
      )
      $('.menu>ul').html(
        data.today_meal.map((value,c)=>{
          const {cate_name}=value
          return `<li class="${c==0?"active":""}" data-x="${c}">${cate_name}</li>`
        })
      )
  
      // console.log(data.today_meal);
      for(let i=0;i<data.today_meal.length;i++){
        // console.log(data.today_meal[i].contents);
        $('.content>ul').append(
          data.today_meal[i].contents.map((value)=>{
          // console.log(value);
          const  {pic,desc,title}=value
          
          // console.log({pic,desc,title});
          return `<li class="swiper-slide">
          <img src="assets/img/food/${pic}" alt="">
          <p>${title}</p>
          <span>${desc}</span>
        </li>`
        })
      )
  
      }
  
  
      for(let i=0;i<data.index_items.length;i++){
        // console.log(data.index_items[i].title);
        $(`.list${i+1}`).html(`<h1>${data.index_items[i].title}</h1><ul></ul>`)
  
        $(`.list${i+1}>ul`).append(
          data.index_items[i].items.map(value=>{
            // console.log(value);
            const {pic,author,title,desc}=value
            // console.log({pic,author,title,desc});
            return `
            <li>
              <div>
              <img src="assets/img/food/${pic}" alt="">
              <p>${author}</p>
              </div>
             
              <span>${title}</span>
              <i>${desc}</i>
            </li>
          `
          })
        )
      }
  
      // $(`.list1`).append(
      //   data.index_items[0].items.map(value=>{
      //     console.log(value);
      //     const {pic,author,title,desc}=value
      //     console.log({pic,author,title,desc});
      //     return ` <ul>
      //     <li>
      //       <img src="../../assets/img/food/${pic}" alt="">
      //       <p>${author}</p>
      //       <span>${title}</span>
      //       <i>${desc}</i>
      //     </li>
      //   </ul>`
      //   })
      // )
      
     
      // console.log($('.menu>ul>li').eq(0).html());
      // $('.menu>ul>li').eq(0).addClass('active')


   
    })

  }

    //  stop()
    // clearInterval()
     setInterval(() => {
      $('.banner').toggleClass('active')
}, 3000);

  getDate()
  


  $('.today-hot>ul').on('click','>li',function(){
    $('.search>input').val($(this).html())
    $('.search>button').click()  
  })

  $('.menu>ul').on('click','>li',function(){
    // $('.content').css('transform',`translateX(-${$(this).data().x}00%)`)


    $(this).addClass('active').siblings().removeClass('active')

    const i=$(this).index()
    mySwiper&&mySwiper.slideTo(i*3)
  //  console.log($(this).html(),$(this).data());
 })

  $('.banner').html(`<img class="bg" src="./assets/img/index/66.jpg" alt="">
  <div class="desc">
    <b>让吃饭变简单</b>
    <span>msgc.xin88.top</span>
  </div>
  <img class="hand" src="./assets/img/index/55.png" alt="">`)
 

})
