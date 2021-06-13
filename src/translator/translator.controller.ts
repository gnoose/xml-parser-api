import { Body, Controller, Get, Post } from '@nestjs/common';

import { TranslatorService } from './translator.service';
import { TranslatorRequestDto } from './dtos/translate-request.dto';

@Controller('translator')
export class TranslatorController {
  constructor(private translatorService: TranslatorService) {}

  @Get()
  getHello(): string {
    return this.translatorService.getHello();
  }

  @Post()
  async translate(@Body() body: TranslatorRequestDto) {
    return this.translatorService.translate(body);
  }
}
