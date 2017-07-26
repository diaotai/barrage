import { CONTENTS, DELETE } from './action';
const initialState={
    contents:[]
};
export function contentsReducer(state=initialState,action){
    switch(action.type){
        case CONTENTS:
        return Object.assign({},state,{
            contents:[...state.contents,action.data]
        });
        case DELETE:
           // console.log(state.contents,"被执行了!!!")
            let tmp = state.contents;
            tmp.pop();
           // console.log(tmp,"tmp!!!")
          return Object.assign({},state,{
           contents:tmp
        });
        default:
        return state;
    }
}

export default contentsReducer;