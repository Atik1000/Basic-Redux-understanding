import {INCREMENT_COUNT} from './counterType'
export const setCount =(counting)=>{
    return({
        type:INCREMENT_COUNT,
        payload:counting
    })
       
    
}