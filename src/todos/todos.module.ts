import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';

@Module({
  controllers: [TodosController],
  providers: [TodosService, PrismaService],
})
export class TodosModule {}
