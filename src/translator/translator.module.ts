import { Module } from '@nestjs/common';
import { AwsModule } from 'nest-aws';

import { TranslatorController } from './translator.controller';
import { TranslatorService } from './translator.service';

@Module({
  imports: [
    AwsModule.forRoot({
      region: process.env.AWS_REGION,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    }),
  ],
  controllers: [TranslatorController],
  providers: [TranslatorService],
})
export class TranslatorModule {}
