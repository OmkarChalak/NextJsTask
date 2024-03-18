import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from './user.model';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
  ) {}

    l

  async addUser(firstname: string, lastname: string, password: string) {
    const newUser = new this.userModel({
      firstname, 
      lastname,
      password
    });
    const result = await newUser.save();
    // this.logger.log(result);
    return result.firstname as string;
  }

  async getUsers() {
    const users = await this.userModel.find().exec();
    return users.map(usr => ({
      firstname: usr.firstname,
      lastname: usr.lastname,
      password: usr.password
    }));
  }
}