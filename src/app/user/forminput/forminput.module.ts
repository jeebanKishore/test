import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForminputComponent } from './forminput.component';

@NgModule({
  declarations: [ForminputComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ForminputComponent
],
providers: [ForminputComponent]
})
export class ForminputModule { }
