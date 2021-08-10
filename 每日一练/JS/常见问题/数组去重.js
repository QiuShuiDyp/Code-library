// 数组去重
function myFilter(arr, key){
    console.log(key)
    arr.forEach((item, index, self) => {
        for(let j = index+1; j < self.length; j++){
            if(key){
                if(arr[index][key] === arr[j][key]){
                    arr.splice(j)
                    j--
                }
            }else{
                if(arr[index] === arr[j]){
                    arr.splice(j)
                    j--
                }
            }
        }
    })
    return arr
}

// 用例测试
let arr1 = [{id:1},{id:2},{id:3},{id:4},{id:1}]
let arr2 = [1,2,3,4,4,5,6,3,1]
myFilter(arr2)
// myFilter(arr2,'id')
