import { Controller, HttpException, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as OSS from 'ali-oss';
import { ERROR_MAP } from 'dictionary';

@Controller('upload')
export class UploadController {
  @Post()
  @UseInterceptors(FileInterceptor('file', { limits: { fileSize: 1024 * 1024 * 500 } }))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const ossClient = new OSS({
      region: 'oss-cn-chengdu',
      accessKeyId: process.env.OSS_ACCESS_KEY_ID,
      accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
      bucket: 'cqrywhcb-test',
      timeout: 600 * 1000 // 5mins 超时
    });
    let res = null;
    try {
      res = await ossClient.put(file.originalname, file.buffer);
    } catch (err) {
      console.log(err);
    }
    if (!res) throw new HttpException(ERROR_MAP.get('UPLOAD_FAILED'), 201);
    return {
      code: '000',
      message: '上传成功',
      data: res.url
    };
  }
}
