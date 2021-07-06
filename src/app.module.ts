import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { HttpExceptionFilter } from './common/http-exception.filter';
import { TransformInterceptor } from './common/transform.interceptor';
import { ClassAModule } from './class-a/class-a.module';

@Module({
  imports: [
    ClassAModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  providers: [{
    provide: APP_INTERCEPTOR,
    useClass: TransformInterceptor
  }, {
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  }],
})
export class AppModule { }
