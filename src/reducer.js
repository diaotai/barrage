import { CONTENTS } from './action';
const initialState={
    contents:[{duration:7900,content:"Hello world!!!"}]
};
export function contentsReducer(state=initialState,action){
    console.log(state,"!!")
    switch(action.type){
        case CONTENTS:
        return Object.assign({},state,{
            contents:[...state.contents,action.data]
        })
        default:
        return state;
    }
}

export default contentsReducer;