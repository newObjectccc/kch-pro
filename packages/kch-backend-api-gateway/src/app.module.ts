import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProxyMiddleware } from './middleware/api-gateway.middleware';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ProxyMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL
    });
  }
}
