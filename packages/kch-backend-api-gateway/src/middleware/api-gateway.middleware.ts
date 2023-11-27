import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { NextFunction } from 'express';
import * as proxy from 'express-http-proxy';
import { AuthService } from 'src/auth/auth.service';
import NO_VERIFY_API from '../utils/noVerifyApi';
import SIGN_API from '../utils/signApi';

@Injectable()
export class ProxyMiddleware implements NestMiddleware {
  constructor(private authService: AuthService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    let proxyUrl = `http://cqbackend:${process.env.API_SERVER_EXPOSE_PORT ?? 3000}`; // 特别注意一下这里，cqbackend 是 docker-compose.yml 部署的 service 的服务名，需要docker network中需要这样去访问才可以
    const proxyOptions = {
      proxyReqPathResolver: (req) => req.originalUrl.replace('/api', ''), // 设置代理请求路径
      proxyReqBodyDecorator: async (bodyContent, srcReq) => {
        if (NO_VERIFY_API.includes(req.url) || SIGN_API.includes(req.url)) return bodyContent;
        // 验证 jwt token
        const payload = await this.authService.verifyTokenToUserInfo(req);
        console.log(payload, 'payload');

        if (!payload) throw new UnauthorizedException();
        // 需要用户信息的api，可以建一个needUserInfoApiList，修改 bodyContent
        return bodyContent;
      },
      userResDecorator: async (proxyRes, proxyResData, userReq, userRes) => {
        let modifyBody = proxyResData;
        if (SIGN_API.includes(req.url)) {
          // 签发 jwt token
          modifyBody = await this.authService.signJwtTokenInRespBody(proxyResData);
        }
        return modifyBody;
      }
    };
    let proxyMiddleware = null;
    console.log(req.url);
    if (!/^\/api/.test(req.url)) {
      proxyUrl = `http://127.0.0.1:${process.env.FRONTEND_SERVER_EXPOSE_PORT ?? 8080}`;
      proxyMiddleware = proxy(proxyUrl);
    } else {
      proxyMiddleware = proxy(proxyUrl, proxyOptions);
    }

    proxyMiddleware(req, res, next);
  }
}
