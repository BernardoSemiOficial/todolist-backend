import { Injectable } from '@nestjs/common';
import { Prisma, Todo } from '@prisma/client';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class TodosService {
  constructor(private readonly prismaService: PrismaService) {}

  getTodos(): Promise<Todo[]> {
    return this.prismaService.todo.findMany();
  }

  getTodoById(id: string): Promise<Todo | null> {
    return this.prismaService.todo.findUnique({ where: { id } });
  }

  createTodo(todo: Prisma.TodoCreateInput): Promise<Todo | null> {
    return this.prismaService.todo.create({ data: todo });
  }

  updateTodo(id: string, todo: Prisma.TodoUpdateInput): Promise<Todo | null> {
    return this.prismaService.todo.update({
      data: todo,
      where: { id },
    });
  }

  setCompleteTodo(id: string, isCompleted: boolean): Promise<Todo | null> {
    return this.prismaService.todo.update({
      data: { completedAt: isCompleted ? new Date() : null },
      where: { id },
    });
  }

  deleteTodoById(id: string): Promise<Todo | null> {
    return this.prismaService.todo.delete({ where: { id } });
  }
}
