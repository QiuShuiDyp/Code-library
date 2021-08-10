// 版本对比
function compareVersion(ver1, ver2) {
  const verArr1 = ver1.split('.')
  const verArr2 = ver2.split('.')
  const len = verArr1.length - verArr2.length
  if(len>0){
    for(let i =0;i<len;i++){
      verArr2.push(0)
    }
  }else if(len<0){
    for(let i =0;i>len;i--){
      verArr1.push(0)
    }
  }
  for(let i=0;i<verArr1.length;i++){
    if(parseInt(verArr1[i]) > parseInt(verArr2[i])){
      return 1
    }else if(parseInt(verArr1[i]) < parseInt(verArr2[i])){
      return -1
    }else if(parseInt(verArr1[i]) === parseInt(verArr2[i]) && i === verArr1.length-1){
      return 0
    }
  }
}

console.log(compareVersion('1.2.3','1.1.2'))

// queryString对象，具有parse（url地址转化为对象）和stringify（对象转化为url地址）的能力
class QueryString {
  parse(url){
    let keyValArr = url.split('&')
    let obj = {}
    for(let keyVal of keyValArr){
      let temp = keyVal.split('=')
      let key = temp[0]
      let value = temp[1]
      if(obj.hasOwnProperty(key) && obj[key] instanceof Array){
        obj[key].push(value)
      }else if(obj.hasOwnProperty(key)){
        let oldVal  = obj[key]
        obj[key] = [value,oldVal]
      } else{
        obj[key] = value
      }
    }
    return obj  
  }
  
  stringify(obj){
    let keys = Object.keys(obj)
    let str = '?'
    keys.forEach((key)=>{
      //数组子项拼接
      if(obj[key] instanceof Array){ 
        obj[key].forEach(item => str=str+key+'='+item+'&')
      }else{
        str += key+'='+obj[key]+'&'
      }
    })
    return str.substring(0,str.length-1)
  }
}

let qryStr = new QueryString()
qryStr.stringify(qryStr.parse('name=zhangsan&age=12&age=11'))
qryStr.stringify({ foo: 'bar', abc: ['xyz', '123'], })


