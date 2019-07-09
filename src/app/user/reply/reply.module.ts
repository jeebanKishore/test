import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplyComponent } from './reply.component';

@NgModule({
  declarations: [ReplyComponent],
  imports: [
    CommonModule
  ],
  exports: [ReplyComponent],
  providers : [ReplyComponent]
})
export class ReplyModule { }
