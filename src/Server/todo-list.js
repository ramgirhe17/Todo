/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos
    -complete : Todo shows complete
*/

class Todo {

  constructor() {
    this.todoArr = [];
    this.currentId = 1;
  }
  add(todo) {
    todo.id = this.currentId;
    this.todoArr.push(todo);
    this.currentId++;
  }
  remove(id) {
    const index = this.todoArr.findIndex(todo => todo.id === id.number);
    if (index !== -1) {
        this.todoArr.splice(index, 1);
    }
}

  update(id, updatedTodo) {
    const index = this.todoArr.findIndex(todo => todo.id === id);
      this.todoArr[index] = updatedTodo;
      this.todoArr[index].id = id;
  }
  getAll() {
    return this.todoArr;
  }
  get(indexOfTodo) {
    const index = this.todoArr.findIndex(todo => todo.id === indexOfTodo.number);
    return this.todoArr[index];
  }
  complete(id) {
    const index = this.todoArr.findIndex(todo => todo.id === id);
    let bol = this.todoArr[index].status
    this.todoArr[index].status = !bol;
    this.todoArr[index].id = id;
  }
  CompletedListCount(){
    return (this.todoArr.filter(item =>item.status ).length)
  }
  CompletedList(){
    return (this.todoArr.filter(item =>item.status ))
  }
  clear() {
    this.todoArr = [];
  } 
}

export default new Todo();

