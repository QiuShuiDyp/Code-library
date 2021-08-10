function fn(param){
  console.log(param)
}
function debounce(fn, delay=500){
  let timer = null
  //通过闭包的方式，来获取定时器，同时返回onclick调用的函数
  return function(){
    timer && clearTimeout(timer)
    timer = setTimeout(()=>{
      //这里的arguments为外层的arguments，箭头函数没有自己的arguments
      fn(arguments)
    }, delay)
  }
}


function throttle(fn, delay){
  //时间初始化
  let oldTime = 0
  return function(){
    lastTime = Date.now()
    if((lastTime - oldTime)> delay){
      fn(arguments)
      oldTime = lastTime
    }
  }
}
document.onscroll = throttle(fn, 1000)