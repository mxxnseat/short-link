import { Module } from '@nestjs/common';
import { AppConfig, appConfig } from '@short-link/config';
import { LoggerModule as NestPinoLoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    NestPinoLoggerModule.forRootAsync({
      inject: [appConfig.KEY],
      useFactory: (ac: AppConfig) => {
        return {
          assignResponse: true,
          pinoHttp: {
            transport:
              ac.environment !== 'production'
                ? {
                    target: 'pino-pretty',
                  }
                : undefined,
          },
        };
      },
    }),
  ],
})
export class LoggerModule {}
