import { Global, Module } from '@nestjs/common';
import { LoggerModule, ConfigModule } from './modules';

@Global()
@Module({
  imports: [LoggerModule, ConfigModule],
})
export class CoreModule {}
