import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { usersController } from './users.controller'
import { UsersService } from './users.service'
import { UserSchema } from "./user.model";
import { LoggerService } from "src/logger.service";

@Module({
    imports:[MongooseModule.forFeature([{name: 'User', schema: UserSchema}])],
    controllers: [usersController],
    providers: [UsersService, LoggerService]
})
export class UsersModule{}