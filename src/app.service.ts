import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getUsers(): { id: number; name: string }[] {
    return [{ id: 1, name: 'Bernardo' }];
  }
}
