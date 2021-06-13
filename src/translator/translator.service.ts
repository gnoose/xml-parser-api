import { Injectable } from '@nestjs/common';
import * as aws from 'aws-sdk';

import { TranslatorRequestDto } from './dtos/translate-request.dto';
import { TranslateResponseDto } from './dtos/translate-response.dto';

@Injectable()
export class TranslatorService {
  translator: any;
  constructor() {
    aws.config.update({
      region: process.env.AWS_REGION,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });
    this.translator = new aws.Translate({ apiVersion: '2017-07-01' });
  }
  getHello(): string {
    return 'Hello World! This is TranslatorService';
  }

  translate(message: TranslatorRequestDto): Promise<TranslateResponseDto> {
    return new Promise((resolve, reject) => {
      this.translator.translateText(message, (err: any, data: any) => {
        if (err) {
          reject(err.message);
        } else if (data) {
          resolve({ text: data.TranslatedText });
        }
      });
    });
  }
}
