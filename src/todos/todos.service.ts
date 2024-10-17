import { Injectable } from '@nestjs/common';
import { Todo } from './todos.model';

@Injectable()
export class TodosService {
  todos: Todo[] = [
    {
      id: 1,
      title: 'Create project',
      description: 'Create a new project',
      createdAt: new Date(),
      updatedAt: new Date(),
      doneAt: null,
    },
  ];

  getTodos(): Todo[] {
    return this.todos;
  }
}
