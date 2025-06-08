import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
    // return (
    //   this.configService.get<string>('DATABASE_URL') || 'No DATABASE_URL set'
    // );
    // return this.configService.get('dbconfig.dev') || 'No dbconfig.dev set';
  }
}
