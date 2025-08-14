import { Module } from '@nestjs/common';
import { CoreModule } from '../core';
import { HasherModule } from './hasher';

@Module({
  imports: [CoreModule, HasherModule],
})
export class AppModule {}
