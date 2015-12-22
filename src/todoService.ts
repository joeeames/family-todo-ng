
export class TodoService {
  todos = [
    {title: 'Call school, excuse absences', completed: false, assignee: 'Jen'},
    {title: 'fix stuck car door', completed: false, assignee: 'Joe'}

  ]

  getTodosFor(user) {
    return this.todos.filter(i => {
      return i.assignee === null || !!user && i.assignee === user.name
    });
  }
}