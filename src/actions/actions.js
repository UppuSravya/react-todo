export const ADD_TODO = 'ADD_TODO'
/*adds item into todo list and increments item id*/
let TodoID = 0;
export function addTodo(text) {
   return {
       type: ADD_TODO,
       id: TodoID++,
       text
   };
}


