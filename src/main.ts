import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder, OpenAPIObject } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { databaseConfig } from './config/database.config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (!databaseConfig.isProduction()) {
    const document: OpenAPIObject = SwaggerModule.createDocument(
      app,
      new DocumentBuilder()
        .setTitle('User API')
        .setDescription('This is the users API section')
        .build(),
    );

    SwaggerModule.setup('api', app, document);
  }
  await app.listen(3000);
}
bootstrap();
