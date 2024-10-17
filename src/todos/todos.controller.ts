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
  getTodos() {
    return this.todosService.getTodos();
  }

  @Post()
  createTodo(@Body() todo: CreateTodoDTO) {
    console.log('createTodo', todo);
    return 'Todo created';
  }

  @Put(':id')
  updateTodo(@Param('id') id: number, @Body() todo: UpdateTodoDTO) {
    console.log('updateTodo', id, todo);
    return 'Todo updated';
  }

  @Patch('/done/:id')
  markAsDone(@Param('id') id: number) {
    console.log('markAsDone', id);
    return 'Todo marked as done';
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: number) {
    console.log('deleteTodo', id);
    return 'Todo deleted';
  }
}
