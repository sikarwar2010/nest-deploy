import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Tarun Sikarwar! we are start new project in MSME Industry!';
  }
}
