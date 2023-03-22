import { arr } from "./array.js"

function Linear_SearchNum(arr, x){

    for(let i = 0; i < arr.length; i++){
        if(arr[i]===x){
            return i
        } 
    }
    return null
}

function verify(res){
    if(!res){
        console.log('Value not found.')
    } else {
        console.log(`Target found at index ${res}`)
    }
}

let result
result = Linear_SearchNum(arr, 5)
verify(result)
result  = Linear_SearchNum(arr, 54)
verify(result)