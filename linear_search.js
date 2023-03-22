import { arr } from "./array.js"

function Linear_SearchNum(arr, x){

    for(let i = 0; i < arr.length; i++){
        if(arr[i]===x){
            return i
        } 
    }
    return null
}

function ver(result){
    if(!result){
        console.log('Value not found.')
    } else {
        console.log(`Target found at index ${result}`)
    }
}
let result = Linear_SearchNum(arr, 5)
ver(result)