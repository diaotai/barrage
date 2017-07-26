export const CONTENTS = Symbol('CONTENTS');
export const DELETE = Symbol('DELETE')

export function updateContens(data){
    return {
        type:CONTENTS,
        data
        //data对象组成的数组
    }
}

export function deleteContens(key){
    return {
        type:DELETE,
        key
      //data对象组成的数组
    }
}