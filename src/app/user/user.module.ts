import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForminputModule } from './forminput/forminput.module';
import { ReplyModule } from './reply/reply.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ForminputModule,
    ReplyModule
  ],
  exports: [ForminputModule, ReplyModule],
  providers: [ForminputModule, ReplyModule]
})
export class UserModule { }
