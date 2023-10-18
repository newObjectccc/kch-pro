import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import * as proxy from 'express-http-proxy';
require('dotenv').config({
  path: `./.env.${process.env.NODE_ENV ?? 'production'}`
});

@Injectable()
export class ProxyMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const proxyMiddleware = proxy(
      `http://127.0.0.1:${process.env.TARGET_SERVER_EXPOSE_PORT ?? 3000}`,
      {
        proxyReqPathResolver: (req) => req.originalUrl.replace('/api', ''), // 设置代理请求路径
        userResDecorator: (proxyRes, proxyResData, userReq, userRes) => {
          // 在这里获取响应体
          const responseBody = proxyResData.toString('utf8');
          // 对响应体进行处理
          console.log(responseBody);

          return proxyResData;
        }
      }
    );

    // 将代理中间件绑定到Express应用程序
    proxyMiddleware(req, res, next);
  }
}
