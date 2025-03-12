import { Controller, Get, Inject, Logger, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CONSUMER_SERVICE } from 'src/config';

@Controller('consumer')
export class ConsumerController {
  constructor(
    @Inject (CONSUMER_SERVICE) private readonly consumerClient: ClientProxy,
  ) {
   
  }
  
  @Post()
  createConsumer(){
    return 'crea un Consumer' ;''
  }

  @Get()
  findConsumer(){
    return this.consumerClient.send({cmd:"findWithRetry"} ,{});
  }

}



