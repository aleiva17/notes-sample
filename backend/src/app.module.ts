import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NotebookModule } from './notebook/notebook.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development'], // First file-variable match persists
      isGlobal: true,
    }),
    NotebookModule,
  ],
})
export class AppModule {}
