import { TagController } from './tag.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [TagController],
  providers: [],
})
export class TagModule {}
