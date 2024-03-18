import {
    Controller,
    Post,
    Body,
    Get,
  } from '@nestjs/common';
  
  import { UsersService } from './users.service';
  import  {LoggerService} from 'src/logger.service'

  @Controller('users')
  export class usersController {
    constructor(
      private readonly UsersService: UsersService,
      private readonly logger: LoggerService) {}
  
    @Post()
    async addUser(
      @Body('firstname') usrFirstname: string,
      @Body('lastname') usrLastname: string,
      @Body('password') usrPassword: string,
    ) 

    {
      try {
        const generatedId = await this.UsersService.addUser(
          usrFirstname,
          usrLastname,
          usrPassword
        );
        
        this.logger.log('User created Successfully');
        return generatedId;
      }
      catch (error) {
            this.logger.error('Failed to create user');
            throw error;
      }
    }
      
    @Get()
    async getAllUsers() {
      try
        {
          const userData = await this.UsersService.getUsers();
          this.logger.log('Users fetched successfully');
          return userData;
        }
      catch(error)
      {
          this.logger.error('Failed to create User');
          throw error;
      }
  }
}