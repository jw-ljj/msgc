// const { get } = require("jquery")

$(function(){

  // function total(){
  //   var  $s=[]
   
  //   for(let i=1;i<40;i++){
  //     var url=`https://serverms.xin88.top/mall/search?type=1&page=${i}&kw=`
  //     $.get(url,data=>{
  //     $xgh=data.data;
  //     console.log($xgh);
  //      $s2=$s.concat($xgh)

  //   })
  //   }
  //   console.log($s2);
  // }
  // total()


  // console.log(location.hash.slice(13));

  function getData(tj,p,kw){
    var url=`https://serverms.xin88.top/mall/search?type=${tj}&page=${p}&kw=`+kw
  $.get(url,data=>{
    // console.log(data);
    $('#search-items').html(
      data.data.map(value=>{
        const {id,price,sale_count,name,pic}=value

        var guiz = new RegExp(kw,'gi')
        var xghname=name.replace(guiz,'<span style="color:red">$&</span>')

        return `
        <li>
        <img src="assets/img/mall/${pic}" alt="">
        <div>
          <p>${xghname}</p>
          <span>￥${price}</span>
          <i>销量: ${sale_count}</i>
        </div>
       </li>
        `
      })
    )

    const {page,pageCount}=data
    console.log({page,pageCount});

    if(pageCount==0){
      // alert('没有搜索相关商品,请重新输入...')
      $('#search-items').html(`<h2>没有和 <span style="color:red">${kw}</span> 相关商品,请重新输入...</h2>`)
      $('.pages>button').eq(0).hide()
      $('.pages>button').eq(1).hide()

    }
    let start =page-2
    let end =page+2
      if(start<1){
        start=1
        end=start+4
        // if(end<1)end=1
        // if(pageCount==1)end=1

      }
      if(end>pageCount){
        end=pageCount
        start=end-4
        if(start<1)start=1
      }
      // if(pageCount==1)start=end=1
      // 按钮隐藏

    // page==1? $('.pages>button').eq(0).hide(): $('.pages>button').eq(0).show()
    // page==pageCount? $('.pages>button').eq(1).hide(): $('.pages>button').eq(1).show()
    // console.log($('.pages>ul>li.active').html());

      $('.pages>button').eq(0).prop('disabled',page==1)
      $('.pages>button').eq(1).prop('disabled',page==pageCount)
    

    $('.pages>ul').empty()
    for(let i=start;i<=end;i++){
      $('.pages>ul').append(`<li class="${page==i?"active":""}">${i}</li>`)
    }
    


  })
  }
  getData(0,1,$.hash('kw'))

  $('.pages>ul').on('click','>li',function(){
    // console.log($(this).html());
    getData($('.tj>span.active').data().tj,$(this).html(),$.hash('kw'))
  })



  $('.tj>span').eq(0).addClass('active')

  $('.tj').on('click','>span',function(){
    // console.log($('.tj'));
    // console.log($(this));
    $(this).addClass('active').siblings().removeClass('active')
  })

  $('.pages>button').eq(0).click(function(){
    $('.pages>ul>li.active').prev().click()
  })
  $('.pages>button').eq(1).click(function(){
    $('.pages>ul>li.active').next().click()
  })

//条件查询
  $('.tj').on('click','>span',function(){
    // console.log( $(this).data().tj);
    getData($(this).data().tj,1,$.hash('kw'))
    // $('.pages>ul>li.active').html()
   
  })

})