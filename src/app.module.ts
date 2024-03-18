import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from './logger.service'
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
    'mongodb+srv://omkarchalakin:NwXA4R5DsuDM4BXT@cluster0.fdp2la7.mongodb.net/nestjsTask?retryWrites=true&w=majority&appName=Cluster0'
    ),
  ],
  controllers: [AppController],
  providers: [AppService, LoggerService],
  exports: [LoggerService]
})
export class AppModule {}
