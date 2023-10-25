import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class GlobalHttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();
    const errorResponse = exception.getResponse() as {
      message: string;
      code: string;
      error: string;
    };

    response.status(status).json({
      code: errorResponse.code,
      message: errorResponse.message,
      error: errorResponse.error
    });
  }
}
