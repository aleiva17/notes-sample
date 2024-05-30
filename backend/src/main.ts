import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalPipes(
    new ValidationPipe({
      // We deny requests with 400 Bad Request when additional properties are passed
      whitelist: true,
      forbidNonWhitelisted: true,
      /*
       * DTOs by default are not instances of the classes, but they have their shape.
       * So with this, we can have the DTOs as actual instances. Additionally, the
       * params (in the controllers) can be automatically parsed to the type we specify
       * (By default they are all strings).
       * */
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Notes API')
    .setDescription(
      'Welcome to the Notes API Documentation! This Swagger page provides a comprehensive overview of the endpoints and functionalities offered by our backend services. Developed using NestJS, our API allows users to perform CRUD operations on notes and tags. Each note can be associated with multiple tags, providing flexibility and organization to your note-taking experience.',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
