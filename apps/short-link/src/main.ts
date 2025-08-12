import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import {
  NestFastifyApplication,
  FastifyAdapter,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      bufferLogs: true,
    },
  );
  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
bootstrap();
