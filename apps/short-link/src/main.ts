import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Logger } from 'nestjs-pino';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://admin:admin123@localhost:5672'],
        queue: 'short-link-queue',
        queueOptions: { durable: false },
      },
      bufferLogs: true,
    },
  );
  app.useLogger(app.get(Logger));

  await app.listen();
}

void bootstrap();
