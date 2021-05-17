import {INCREMENT_COUNT} from './counterType'
const initialState={
 count:[],
 
}
export const counterReducer=(state=initialState,action)=>{
    switch(action.type){
        case INCREMENT_COUNT:return{
            ...state,
            count:state.count+action.payload
        }
        default:return state;
    }
}