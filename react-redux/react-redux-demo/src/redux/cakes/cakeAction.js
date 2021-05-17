import {BUY_CAKE} from './cakeType'
export const buyCake =(data=5)=>{
    return {
        type: BUY_CAKE,
        payload:data
    }
}