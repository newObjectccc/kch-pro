import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async verifyTokenToUserInfo(req: Request): Promise<object | undefined> {
    const token = this.extractTokenFromHeader(req);
    if (!token) throw new UnauthorizedException();
    let payload;
    try {
      payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET_KEY
      });
    } catch {
      throw new UnauthorizedException();
    }
    return payload;
  }

  extractTokenFromHeader(req: Request): string | undefined {
    const [type, token] = (req.headers as any).authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  async signJwtTokenInReqBody(proxyResData) {
    let respBody;
    try {
      respBody = JSON.parse(proxyResData.toString('utf8'));
    } catch {}
    if (!respBody?.data) return proxyResData;
    const access_token = await this.jwtService.signAsync(respBody.data);
    respBody.data.token = `Bearer ${access_token}`;
    return JSON.stringify(respBody);
  }
}
