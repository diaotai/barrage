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

          //  console.log(tmp,"tmp!!!")
          return Object.assign({},state,{
           contents:state.contents.filter((e)=>{
                return e.key!==action.key
           })
        });
        default:
        return state;
    }
}

export default contentsReducer;