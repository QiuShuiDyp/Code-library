// JS内置方法Math.random() 生成指定区间的整数（小数），不适用与安全领域
function myRandom(min, max){
    switch(arguments.length){
        case 1: return Math.ceil(Math.random() * max)
        case 2: return Math.ceil(Math.random() * (max - min) + min)
    }
}
//适用于安全领域
function myGetRandomValues(){
    let typeArray = new Int8Array()
    return window.crypto.getRandomValues(typeArray)
}