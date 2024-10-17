import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTodoDTO, UpdateTodoDTO } from './todos.model';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async getTodos() {
    try {
      return await this.todosService.getTodos();
    } catch (error) {
      console.error(error);
      return 'Error getting todos';
    }
  }

  @Get(':id')
  async getTodo(@Param('id') id: string) {
    try {
      const todo = await this.todosService.getTodoById(id);
      return todo || 'Todo not found';
    } catch (error) {
      console.error(error);
      return 'Error getting todo';
    }
  }

  @Post()
  async createTodo(@Body() todo: CreateTodoDTO) {
    try {
      await this.todosService.createTodo(todo);
      return 'Todo created';
    } catch (error) {
      console.error(error);
      return 'Error creating todo';
    }
  }

  @Put(':id')
  async updateTodo(@Param('id') id: string, @Body() todo: UpdateTodoDTO) {
    try {
      console.log('updateTodo', id, todo);
      await this.todosService.updateTodo(id, todo);
      return 'Todo updated';
    } catch (error) {
      console.error(error);
    }
  }

  @Patch('/completed/:id')
  async markAsDone(@Param('id') id: string) {
    try {
      const todo = await this.todosService.getTodoById(id);
      await this.todosService.setCompleteTodo(
        id,
        todo?.completedAt ? false : true,
      );
      return todo?.completedAt
        ? 'Todo marked as not completed'
        : 'Todo marked as completed';
    } catch (error) {
      console.error(error);
      return 'Error marking todo as completed';
    }
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: string) {
    try {
      await this.todosService.deleteTodoById(id);
    } catch (error) {
      console.error(error);
      return 'Error deleting todo';
    }
  }
}
