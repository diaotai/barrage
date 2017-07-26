
export const CONTENTS = Symbol('CONTENTS');
export function updateContens(data){
    return {
        type:CONTENTS,
        data
        //data对象组成的数组
    }
}