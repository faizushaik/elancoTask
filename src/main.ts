import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'bootstrap/dist/css/bootstrap.min.css';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
