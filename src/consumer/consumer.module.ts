import { Logger, Module,  OnModuleInit } from '@nestjs/common';
import { ConsumerController } from './consumer.controller';
import { ClientsModule, Transport, ClientProxyFactory, ClientProxy } from '@nestjs/microservices';
import { CONSUMER_SERVICE} from '../config/index';
import { envs } from '../config/envs';


@Module({
  controllers: [ConsumerController],
  providers: [],
  imports: [
    ClientsModule.register([
      { name: CONSUMER_SERVICE, 
        transport: Transport.TCP,
        options: {
          host: envs.consumerMicroserviceHost,
          port: envs.consumerMicroservicePort ? parseInt(envs.consumerMicroservicePort, 10) : undefined,
        }
     },

  ]),
  ]
})


export class ConsumerModule {
  constructor() {
    console.log({envs});
  }
}


/*
export class ConsumerModule implements OnModuleInit {
  private client: ClientProxy;

  constructor() {
    Logger.log({ envs });
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: envs.consumerMicroserviceHost,
        port: envs.consumerMicroservicePort ? parseInt(envs.consumerMicroservicePort, 10) : undefined,
      },
    });
  }

  async onModuleInit() {
    await this.client.connect();
    Logger.log('Microservice client connected');
  }

  */


