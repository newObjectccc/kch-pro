import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';
require('dotenv').config({
  path: `./.env.${process.env.NODE_ENV ?? 'production'}`
});

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY
    })
  ],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {}
