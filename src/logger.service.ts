import * as winston from "winston";
import { Logger } from "winston";
import { winstonConfig } from './winston.config';
import { Injectable } from "@nestjs/common";

@Injectable()
export class LoggerService {
    private readonly logger : Logger;

    constructor() {
        this.logger = winston.createLogger(winstonConfig);
    }

    log(message: string) {
        this.logger.log({level: "info", message});
      }
      
    error(message: string) {
        this.logger.log({level: "error", message}); 
      } 

}


