export class Todo {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  doneAt: Date | null;
}

export class CreateTodoDTO {
  title: string;
  description: string;
}

export class UpdateTodoDTO {
  title: string;
  description: string;
}
